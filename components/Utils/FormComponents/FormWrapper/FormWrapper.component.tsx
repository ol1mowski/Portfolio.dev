import { memo } from 'react';

import Success from "@/components/UI/Success/Success.component";
import FormComponent from "../Form.component";

import type { FormState } from "@/hooks/useFormValidation";

interface FormWrapperProps {
  formState: FormState;
  formRefs: {
    email: React.RefObject<HTMLInputElement>;
    name: React.RefObject<HTMLInputElement>;
    privacy: React.RefObject<HTMLInputElement>;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const FormWrapper = memo(({ 
  formState: { isPending, error, success, errors }, 
  formRefs, 
  handleSubmit 
}: FormWrapperProps) => {
  if (success) {
    return <Success />;
  }

  return (
    <FormComponent
      name={formRefs.name}
      email={formRefs.email}
      privacy={formRefs.privacy}
      error={error}
      errors={errors}
      isPending={isPending}
      success={success}
      handleSubmit={handleSubmit}
    />
  );
});

FormWrapper.displayName = 'FormWrapper';

export default FormWrapper; 