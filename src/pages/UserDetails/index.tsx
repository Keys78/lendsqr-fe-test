import ArrowBack from 'components/Icons/ArrowBack'
import Tabs from 'components/CustomTabs/Tabs'
import '../UserDetails/userdetails.scss'
import StarIcon from 'components/Icons/StarIcon'
import Button from 'components/Shared/Button/Index'
import { useNavigate } from 'react-router-dom';


const Index = () => {
    // const navigate = useNavigate();

    // const renderX = cardInfo.map((val, i) => (
    //     <div key={i}>
    //         <p>{val.title}</p>
    //     </div>
    // ))

    return (
        <section>
            <div className='user__details__wrapper'>
                <button
                    // onClick={() => navigate(-1)} 
                    className='back__btn'>
                    <ArrowBack />&nbsp; Back to Users
                </button>
                <div className='activation__cta'>
                    <h1 className='heading'>User Details</h1>
                    <div>
                        <Button background='blacklist__btn' children={'Blacklist User'} />
                        <Button background='activate__btn' children={'Activate User'} />
                    </div>
                </div>
                <div className='user__board'>
                    <div className="tandem__one">
                        <div className='user__profile'>
                            <img src="./images/user.png" alt="alt_name" />
                            <div>
                                <h1>{'Grace Effiom'}</h1>
                                <p>{'LSQFf587g90'}</p>
                            </div>
                        </div>
                        <div className='user__tier'>
                            <h1>User’s Tier</h1>
                            <StarIcon />
                        </div>
                        <div className='bank__details'>
                            <h1>{'₦200,000.00'}</h1>
                            <p>{'9912345678/Providus Bank'}</p>
                        </div>
                    </div>
                    <Tabs>
                        <section className='tab__style' title={`General Details`}>
                            <div className='tandem__two'>
                                <h5>Personal Information</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'full Name'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'phone number'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'email address'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'bvn'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'gender'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'marital status'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'children'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'type of residence'}</h2>
                                        <h3>{'Grace Effiom'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='tandem__two'>
                                <h5>Education and Employment</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'level of education'}</h2>
                                        <h3>{'B.Sc'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'employment status'}</h2>
                                        <h3>{'B.Sc'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'sector of employment'}</h2>
                                        <h3>{'B.Sc'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'Duration of employment'}</h2>
                                        <h3>{'B.Sc'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'office email'}</h2>
                                        <h3>{'B.Sc'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'Monthly income'}</h2>
                                        <h3>{'B.Sc'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'loan repayment'}</h2>
                                        <h3>{'B.Sc'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='tandem__two'>
                                <h5>Socials</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'twitter'}</h2>
                                        <h3>{'@grace_effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'facebook'}</h2>
                                        <h3>{'@grace_effiom'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'instagram'}</h2>
                                        <h3>{'@grace_effiom'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='tandem__two'>
                                <h5>Guarantor</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'full bame'}</h2>
                                        <h3>{'Debby Ogana'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'Phone Number'}</h2>
                                        <h3>{'Debby Ogana'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'email address'}</h2>
                                        <h3>{'Debby Ogana'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'relationship'}</h2>
                                        <h3>{'Debby Ogana'}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <span className='l__tabs' title={`Documents`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`Bank Details`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`Loans`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`Savings`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`App and System`}> Currently Unavailable </span>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Index
