import sunworld from '../../assets/sunworldlogo.png'
import vnpay from '../../assets/vnpaylogo.png'
import viettel from '../../assets/viettellogo.png'
import vinpearl from '../../assets/vinpearllogo.png'
import zalopay from '../../assets/zalopaylogo.png'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const imgArr = [sunworld, vnpay, viettel, vinpearl, zalopay]

const Partnership = () => {
    return (
        <div className='w-full flex flex-col items-center py-[30px]'>
            <h2 className='w-[90vw] sm:w-full text-[40px] text-(--dark-color) leading-[1.2] text-justify sm:text-center font-bold'>Đối tác & khách hàng tiêu biểu</h2>
            <p className='w-[90vw] sm:w-full text-justify sm:text-center mt-[10px] sm:m-0 text-(--txt-color)'>Techera tự hào đồng hành cùng các đối tác lớn trong lĩnh vực du lịch và giải trí.</p>
            <div className='bg-(--light-color) w-[80%] hidden sm:flex flex-row justify-between items-end p-[20px] sm:px-[70px] sm:py-[35px] mt-[10px] sm:mt-[30px] rounded-[10px]'>
                <img src={sunworld} alt="sunworld-img" className='w-[10rem]' />
                <img src={vnpay} alt="vnpay-img" className='w-[10rem]' />
                <img src={viettel} alt="viettel-img" className='w-[10rem]' />
                <img src={vinpearl} alt="vinpearl-img" className='w-[10rem]' />
                <img src={zalopay} alt="zalopay-img" className='w-[10rem]' />
            </div>
            <div className='sm:hidden bg-(--light-color) w-[90vw] flex flex-col p-[20px] mt-[10px] rounded-[10px]'>
                <Carousel className="w-full">
                    <CarouselContent>
                        {imgArr.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={img} alt="partnership-img" className='w-full' />
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-8" />
                    <CarouselNext className="-right-8" />
                </Carousel>
            </div>
        </div>
    )
}

export default Partnership
