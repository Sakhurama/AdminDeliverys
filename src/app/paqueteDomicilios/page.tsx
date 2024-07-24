import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import DragDrop from '@/components/DomiciliosDnD/DragDrop'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'

const PaqueteDomicilios = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Paquete de domicilios"/>
      <DragDrop/>
    </DefaultLayout>
  )
}

export default PaqueteDomicilios