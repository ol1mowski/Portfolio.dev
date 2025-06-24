'use client';

import { useState } from 'react';
import MaterialsHub from '@/components/pages/Materials/MaterialsHub/MaterialsHub.component';
import EmailGateForm from '@/components/pages/Materials/EmailGateForm/EmailGateForm.component';
import { MATERIALS } from '@/data/Materials.data';

export default function MaterialsPage() {
  const [hasEmailAccess, setHasEmailAccess] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
    setHasEmailAccess(true);
  };

  if (!hasEmailAccess) {
    return <EmailGateForm onEmailSubmit={handleEmailSubmit} />;
  }

  return <MaterialsHub initialMaterials={MATERIALS} />;
}
