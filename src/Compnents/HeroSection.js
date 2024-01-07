import CustomImage from "./CustomImage"
export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpeg",
        "/img/gallery/img_2.jpeg",
        "/img/gallery/img_3.jpeg",
        "/img/gallery/img_4.jpeg",
        "/img/gallery/img_5.jpeg",
        "/img/gallery/img_6.jpeg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpeg",
        "/img/gallery/img_9.jpeg" 
    ]
    return(

        <div className="section hero">
            <div className="col typography">
                <h1 className="titel">We Are We About</h1>
                <p className="info">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences</p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
            {images.map((src,index)=>(
                <CustomImage key={index} imgSrc={src} pt={"90%"} />
            
            ))}
            </div>
            
        </div>
    )
}