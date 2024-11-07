"use client";

import { useRef, useState } from "react";
import FormComponent from "./Form.component";
import { redirect } from "next/navigation";
import Success from "@/components/UI/Success/Success.component";

function Form({ action }: { action: (formData: FormData) => Promise<void> }) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const email = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const privacy = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const nameValue = name.current?.value.trim() || "";
    const emailValue = email.current?.value.trim() || "";
    const privacyChecked = privacy.current?.checked || false;

    if (!nameValue) {
      newErrors.name = "*Imię jest wymagane";
    } else if (nameValue.length < 3) {
      newErrors.name = "*Imię musi zawierać co najmniej 3 litery";
    }
    if (!emailValue) {
      newErrors.email = "*Email jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      newErrors.email = "Nieprawidłowy email";
    }
    if (!privacyChecked) {
      newErrors.privacy = "*Musisz zaakceptować politykę prywatności";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setError(null);
    setSuccess(null);

    if (!validateForm()) {
      setIsPending(false);
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      await action(formData);
      if (name.current) name.current.value = "";
      if (email.current) email.current.value = "";
      if (privacy.current) privacy.current.checked = false;
      setSuccess("Udało się ! wkrótce otrzymasz mojego E-booka !");
      redirect("/");
    } catch (err) {
      setError("[-] Coś Poszło Nie Tak, Spróbuj ponownie");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      {success ? (
        <Success />
      ) : (
        <FormComponent
          name={name}
          email={email}
          privacy={privacy}
          error={error}
          errors={errors}
          isPending={isPending}
          success={success}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default Form;
