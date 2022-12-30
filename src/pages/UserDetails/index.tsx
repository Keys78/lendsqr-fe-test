import ArrowBack from 'components/Icons/ArrowBack'
import Tabs from 'components/CustomTabs/Tabs'
import React from 'react'

const Index = () => {
    const cardInfo: { title: string; data: string; }[] = [
        {
          title: 'users',
          data: '200'
        },
        {
          title: 'active users',
          data: '200'
        },
        {
          title: 'users with loan',
          data: '200'
        },
        {
          title: 'users with savings',
          data: '200'
        },
      ]

      const renderX = cardInfo.map((val, i) => (
        <div key={i}>
            <p>{val.title}</p>
        </div>
      ))

  return (
    <section>
        <div>
            <button><ArrowBack /> Back to Users</button>
            <h1>User Details</h1>
            <div>
            <Tabs>
                <span title={`General Details`}> {renderX} </span>
                <span title={`Documents`}> Nothing to show </span>
                <span title={`Bank Details`}> Nothing to show </span>
                <span title={`Loans`}> Nothing to show </span>
                <span title={`Savings`}> Nothing to show </span>
                <span title={`App and System`}> Nothing to show </span>
            </Tabs>
            </div>
        </div>
    </section>
  )
}

export default Index
