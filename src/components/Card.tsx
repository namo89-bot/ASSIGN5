import Image from 'next/image';
import styles from './card.module.css'
import InteractiveCard from './InteractiveCard';
interface CardProps {
  venueName: string;
  imgSrc: string;
}
export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <InteractiveCard contentName = {venueName}>
            <div className = 'w-full h-[70%] relative rounded-t-lg'>
                <Image src = {imgSrc}
                alt = 'Venue Picture'
                fill = {true}
                className = 'object-cover rounded-t-lg'/>
            </div>
            <div className = {'w-full h-[30%] p-[5px]'}>
                <h3 className = 'underline font-bold text-[20px] text-[chocolate]'>{venueName}</h3>
            </div>
        </InteractiveCard>
  );
}