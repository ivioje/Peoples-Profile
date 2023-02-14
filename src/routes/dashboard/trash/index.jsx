import React from 'react'
import DashboardHeaders from '../../../components/dashboard/DashboardHeaders';
import trashIcon from '../../../assets/trash.svg'

const Trash = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center'>
      <DashboardHeaders
        title={'Deleted profiles'}
        subtitle={'Restore or permernently delete a profile.'}
        icon={trashIcon}
      />

    </section>
  )
}

export default Trash