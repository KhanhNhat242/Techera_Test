import ticket from '../../assets/ticketimg.png'
import partner from '../../assets/partnerimg.png'
import payment from '../../assets/paymentimg.png'
import talk from '../../assets/talkimg.png'
import shield from '../../assets/shieldimg.png'
import rating from '../../assets/ratingimg.png'


const AboutUs = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full flex flex-col items-center py-[40px]'>
                <h2 className='text-[40px] text-(--dark-color) text-center font-bold'>Hệ sinh thái giải pháp booking du lịch</h2>
                <p className='text-center text-(--txt-color)'>Techera cung cấp nền tảng công nghệ toàn diện cho hoạt động đặt vé du lịch,
                    kết nối <br /> trực tiếp với các khu vui chơi, điểm tham quan và đối tác chiến lược.
                </p>
                <div className='w-[80%] flex flex-row justify-between mt-[50px]'>
                    <div className='w-[24rem] p-[20px] shadow-md rounded-[10px]'>
                        <img src={ticket} alt="ticket-img" className='h-[40%] mb-[20px]' />
                        <h2 className='text-[22px] font-bold my-[5px]'>Nền tảng booking vé</h2>
                        <p className='text-(--txt-color)'>Hệ thống đặt vé du lịch và khu vui chơi trực tuyến, giúp khách hàng tìm kiếm, lựa chọn và đặt vé nhanh chóng.</p>
                    </div>
                    <div className='w-[24rem] p-[20px] shadow-md rounded-[10px]'>
                        <img src={partner} alt="partner-img" className='h-[40%] mb-[20px]' />
                        <h2 className='text-[22px] font-bold my-[5px]'>Kết nối đối tác chiến lược</h2>
                        <p className='text-(--txt-color)'>Liên kết trực tiếp với các khu vui chơi và điểm tham quan lớn như Vinpearl, Sun World, đảm bảo nguồn vé ổn định.</p>
                    </div>
                    <div className='w-[24rem] p-[20px] shadow-md rounded-[10px]'>
                        <img src={payment} alt="payment-img" className='h-[40%] mb-[20px]' />
                        <h2 className='text-[22px] font-bold my-[5px]'>Thanh toán & vận hành</h2>
                        <p className='text-(--txt-color)'>Tích hợp các cổng thanh toán phổ biến, hỗ trợ quản lý đơn hàng, đối soát và báo cáo hiệu quả.</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row justify-center pb-[50px] mt-[50px]'>
                <div className='w-[80%] flex flex-row justify-between'>
                    <div className='w-[50%] flex flex-col items-start justify-end'>
                        <h2 className='text-[40px] text-(--dark-color) text-center font-bold'>Về TECHERA </h2>
                        <p className='w-[30rem] text-(--txt-color) my-[10px]'>Với đội ngũ giàu kinh nghiệm trong lĩnh vực công nghệ và du lịch, Techera tập trung xây dựng các giải pháp booking hiệu quả, giúp kết nối doanh nghiệp với khách hàng một cách nhanh chóng và minh bạch.</p>
                        <div className='w-[30rem] flex flex-row justify-start items-start my-[40px]'>
                            <img src={shield} alt="shield-img" className='bg-[#ECF9FFCC] w-[12%] p-[15px] mr-[1.5rem] rounded-[10px]' />
                            <div className='w-[78%]'>
                                <h3 className='text-[15px] font-bold'>An toàn & bảo mật</h3>
                                <p className='text-(--txt-color)'>Hệ thống được thiết kế với tiêu chuẩn bảo mật cao, đảm bảo an toàn dữ liệu và giao dịch.</p>
                            </div>
                        </div>
                        <div className='w-[30rem] flex flex-row justify-start items-start'>
                            <img src={rating} alt="rating-img" className='bg-[#ECF9FFCC] w-[12%] p-[15px] mr-[1.5rem] rounded-[10px]' />
                            <div className='w-[78%]'>
                                <h3 className='text-[15px] font-bold'>Đội ngũ chuyên môn cao</h3>
                                <p className='text-(--txt-color)'>Đội ngũ kỹ thuật và vận hành am hiểu ngành du lịch, sẵn sàng hỗ trợ và đồng hành cùng đối tác.</p>
                            </div>
                        </div>
                    </div>
                    <img src={talk} alt="talk-img" className='w-[50%]' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
