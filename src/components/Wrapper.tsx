import React,{ FC } from 'react'  


const Wrapper: FC <{children: React.ReactNode}>=({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto max-md:max-w-screen-md  max lg:max-w-screen-lg sm:max-sm: px-4'>
      {children}
    </div>
  )
}
export default Wrapper

