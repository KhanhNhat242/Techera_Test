import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import solution1 from '../../assets/solutionimg1.png'
import solution2 from '../../assets/solutionimg2.png'
import CardItem from "@/components/CardItem"

const CardItemArr = [
    {
        solutionimg: solution1,
        name: 'Nền tảng booking apctravel',
        detail: 'Website và ứng dụng cho phép khách hàng tìm kiếm, đặt vé du lịch và khu vui chơi nhanh chóng.',
    },
    {
        solutionimg: solution2,
        name: 'Hệ thống quản lý & đối soát',
        detail: 'Website và ứng dụng cho phép khách hàng tìm kiếm, đặt vé du lịch và khu vui chơi nhanh chóng.',
    },
    {
        solutionimg: solution1,
        name: 'Nền tảng booking apctravel',
        detail: '',
    },
    {
        solutionimg: solution1,
        name: 'Nền tảng booking apctravel',
        detail: '',
    },
]

const Solution = () => {
    return (
        <Carousel className="w-full">
            <div className='bg-(--light-color) w-full flex flex-col items-center py-[30px] sm:py-[50px]'>
                <div className="w-[90vw] sm:w-[80%] flex flex-row justify-between items-center">
                    <div className="w-full sm:w-[50%] flex flex-col items-start">
                        <h2 className='text-justify sm:text-left text-[40px] leading-[1.2] text-(--dark-color) font-bold'>NỀN TẢNG & GIẢI PHÁP</h2>
                        <p className='text-justify sm:text-left mt-[10px] sm:m-0 text-(--txt-color)'>Các giải pháp công nghệ được Techera phát triển và vận hành
                        trong hệ sinh thái booking du lịch.</p>
                    </div>
                    <div className="bg-[#fff] h-full hidden sm:flex flex-row gap-2 p-[10px] rounded-[5px]">
                        <CarouselPrevious className="static p-[6px] translate-y-0 translate-x-0" />
                        <CarouselNext className="static p-[6px] translate-y-0 translate-x-0" />
                    </div>
                </div>  
                <div className="w-[80%] mt-[20px] sm:mt-[40px]">
                    <CarouselContent>
                        {CardItemArr.map((c, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="p-0">
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <div>
                                                <CardItem solutionimg={c.solutionimg} name={c.name} detail={c.detail} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 sm:hidden" />
                    <CarouselNext className="right-2 sm:hidden" />
                </div>          
            </div>
        </Carousel>
    )
}

export default Solution
