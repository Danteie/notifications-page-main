
import image1 from '../../Assets/avatar-angela-gray.webp'
import image2 from '../../Assets/avatar-anna-kim.webp'
import image3 from '../../Assets/avatar-jacob-thompson.webp'
import image4 from '../../Assets/avatar-kimberly-smith.webp'
import image5 from '../../Assets/avatar-mark-webber.webp'
import image6 from '../../Assets/avatar-nathan-peterson.webp'
import image7 from '../../Assets/avatar-rizky-hasanuddin.webp'
import content1 from '../../Assets/image-chess.webp'

const notifications = [
        {
            image: image5,
            name: 'Mark Webber',
            text: "reacted to your recent post",
            link: "MY first tournament today!",
            time: "1m ago",
            read: false
        },
        {  
            image: image1,
            name: 'Angela Gray',
            text: "followed you",
            time: "5m ago",
            read: false
        },
        { 
            image: image3,
            name: 'Jacob Thompson',
            text: "has joined your group",
            link: "Chess Club",
            time: "1 day ago",
            read: false
        }
        ,
        { 
            image: image7,
            name: 'Rizky Hasanuddin',
            text: "sent you a private message",
            time: "5 days ago",
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            read: true
        },
        { 
            image: image4,
            name: 'Kimberly Smith',
            text: "commented on your picture",
            time: "1 day ago",
            content: content1,
            read: true
        },
        { 
            image: image6,
            name: 'Nathan Peterson',
            text: "reacted to your recent post 5 end-game strategies to increase your win rate",
            time: "2 weeks ago",
            read: true
        },
        { 
            image: image2,
            name: 'Anna Kim',
            text: "left the group",
            link: "Chess Club",
            time: "2 weeks ago",
            read: true
        }
    ]

export default notifications


