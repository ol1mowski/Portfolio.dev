"use client";

import { useFormValidation } from "@/hooks/useFormValidation";
import FormWrapper from "./FormWrapper/FormWrapper.component";

interface FormProps {
  action: (formData: FormData) => Promise<{ success: boolean } | void>;
  slug: string;
}

function Form({ action, slug }: FormProps) {
  const { formState, formRefs, handleSubmit } = useFormValidation({ 
    action, 
    slug 
  });

  return (
    <FormWrapper
      formState={formState}
      formRefs={formRefs}
      handleSubmit={handleSubmit}
    />
  );
}

export default Form;
