import React from 'react'
import DashboardHeaders from '../../../components/dashboard/DashboardHeaders';
import trashIcon from '../../../assets/trash.svg'
import { cardItems } from '../../../constants';
import styles from '../../../style';

const Trash = () => {
  return (
    <section className='font-poppins m-2 xs:p-2 flex flex-col xs:items-start items-center min-h-[80vh]'>
      <DashboardHeaders
        title={'Deleted profiles'}
        subtitle={'Restore or permernently delete a profile.'}
        icon={trashIcon}
      />

      <div className={`flex justify-center items-center flex-wrap `}>
        {cardItems.slice(0, 3).map(item => (
          <div className='xs:w-[200px] w-full m-4' key={item.id}>
            <div className={`h-[114px] bg-cover bg-no-repeat bg-center text-secondary rounded-sm`}
              style={{ 'backgroundImage': `url(${item.photo})` }}>
              <div className='profilesOverlay p-1 flex flex-col justify-between flex-wrap rounded-sm'>
                <div className='text-[15px]'>
                  <h1 className='uppercase py-1'>{item.name}</h1>
                  <h3 className='capitalize font-medium'>{item.work}</h3>
                </div>
                <h6 className='uppercase text-[12px] tracking-[2px]'>sept 10, 2022</h6>
              </div>
            </div>

            <div className={`${styles.flexBtw} px-1 py-3 mt-1 text-slate-600 font-[600] `}>
              <button>Restore</button>
              <button className='text-red-500'>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Trash