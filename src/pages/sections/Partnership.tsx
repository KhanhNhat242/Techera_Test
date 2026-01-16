import sunworld from '../../assets/sunworldlogo.png'
import vnpay from '../../assets/vnpaylogo.png'
import viettel from '../../assets/viettellogo.png'
import vinpearl from '../../assets/vinpearllogo.png'
import zalopay from '../../assets/zalopaylogo.png'

const Partnership = () => {
    return (
        <div className='w-full flex flex-col items-center pt-[50px] pb-[30px]'>
            <h2 className='text-[40px] text-(--dark-color) text-center font-bold'>Đối tác & khách hàng tiêu biểu</h2>
            <p className='text-center text-(--txt-color)'>Techera tự hào đồng hành cùng các đối tác lớn trong lĩnh vực du lịch và giải trí.</p>
            <div className='bg-(--light-color) w-[80%] flex flex-row justify-between items-end px-[70px] py-[35px] mt-[30px] rounded-[10px]'>
                <img src={sunworld} alt="sunworld-img" className='w-[12rem]' />
                <img src={vnpay} alt="vnpay-img" className='w-[12rem]' />
                <img src={viettel} alt="viettel-img" className='w-[12rem]' />
                <img src={vinpearl} alt="vinpearl-img" className='w-[12rem]' />
                <img src={zalopay} alt="zalopay-img" className='w-[12rem]' />
            </div>
        </div>
    )
}

export default Partnership
