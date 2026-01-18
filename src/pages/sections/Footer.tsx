import facebook from '../../assets/facebookicon.png'
import instagram from '../../assets/instagramicon.png'
import twitter from '../../assets/twittericon.png'
import linkedln from '../../assets/linkedlnicon.png'
import mapimg from '../../assets/mapimg.png'

const Footer = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='bg-[#060640] w-full flex flex-col items-center sm:flex-row sm:justify-end sm:items-center py-[10px] px-[10px]'>
                <div className='w-[90vw] sm:w-[25%]'>
                    <h2 className='text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F28C28] via-[#FDAE42] to-[#FFB347] mr-[5px]'>TECHERA</h2> 
                    <p className='text-(--txt-color)'>Đơn vị cung cấp nền tảng công nghệ booking du lịch,
                        đồng hành cùng các đối tác trong hành trình số hoá và phát triển bền vững.
                    </p>
                    <div className='w-full flex flex-row mt-[10px]'>
                        <img src={facebook} alt="facebook-img" />
                        <img src={instagram} alt="instagram-img" className='mx-[5px]' />
                        <img src={twitter} alt="twitter-img" className='mx-[5px]' />
                        <img src={linkedln} alt="linkedln-img" />
                    </div>
                </div>
                <div className='w-[90vw] sm:w-[30%] flex flex-row justify-between mt-[20px] sm:mx-[10px]'>
                    <div>
                        <h3 className='text-[18px] text-[#fff] font-bold'>Công ty</h3>
                        <p className='text-(--txt-color)'>Về chúng tôi</p>
                        <p className='text-(--txt-color)'>Liên hệ</p>
                        <p className='text-(--txt-color)'>Tuyển dụng</p>
                        <p className='text-(--txt-color)'>Giải pháp</p>
                        <p className='text-(--txt-color)'>Đối tác</p>
                    </div>
                    <div>
                        <h3 className='text-[18px] text-[#fff] font-bold'>Thông tin</h3>
                        <p className='text-(--txt-color)'>Chính sách công ty</p>
                        <p className='text-(--txt-color)'>Điều khoản & Điều kiện</p>
                        <p className='text-(--txt-color)'>FAQ</p>
                    </div>
                {/* <img src={mapimg} alt="map-img" className='w-[35%] block' /> */}
                </div>
                <img src={mapimg} alt="map-img" className='w-full my-[20px] sm:m-0 sm:w-[35%]' />
            </div>
            <div className='bg-[#000] w-full h-[50px]'></div>
        </div>
    )
}

export default Footer
