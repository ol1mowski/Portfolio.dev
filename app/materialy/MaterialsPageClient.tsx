'use client';

import { useState } from 'react';
import MaterialsHub from '@/components/pages/Materials/components/MaterialsHub/MaterialsHub.component';
import EmailGateForm from '@/components/pages/Materials/components/EmailGateForm/EmailGateForm.component';
import { MATERIALS } from '@/data/Materials.data';

interface MaterialsPageClientProps {
  hasSession: boolean;
}

export default function MaterialsPageClient({ hasSession }: MaterialsPageClientProps) {
  const [hasEmailAccess, setHasEmailAccess] = useState(hasSession);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    setHasEmailAccess(true);
  };

  if (!hasEmailAccess) {
    return <EmailGateForm onEmailSubmit={handleEmailSubmit} />;
  }

  return <MaterialsHub initialMaterials={MATERIALS} />;
}
