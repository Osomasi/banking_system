import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const MyBanks = () => {
  const loggedIn = { firstName: 'Masi', lastName: 'Emil', email: 'osomasi19@gmail.com' }

  return (
    <section className='bank-info_content'>    
      <header className='home-header'>
        <HeaderBox type='greeting' title='Welcome' user={loggedIn?.firstName || 'Guest'} subtext='Access and manage your account and transactions efficiently' />
      </header>
    </section>
  )
}

export default MyBanks