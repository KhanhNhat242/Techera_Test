import groupavt from '../assets/groupavt.png'

interface Props {
    solutionimg: string | undefined,
    name: string,
    detail: string,
}

const CardItem = ({ solutionimg, name, detail }: Props) => {
    return (
        <div>
            <img src={solutionimg} alt="solution-img" />
            <h3 className="text-[20px] font-medium pt-[10px]">{name}</h3>
            <p className="h-[3rem] text-(--txt-color) pt-[5px]">{detail}</p>
            <div className="w-full flex flex-row items-center mt-[1.5rem]">
                <img src={groupavt} alt="group-avatar-img" className="w-[5rem]" />
                <p className="text-(--txt-color) ml-[-10px]">200K+ users</p>
            </div>
        </div>
    )
}

export default CardItem
