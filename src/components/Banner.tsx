
interface BannerProps {
  title: string;
  description: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, image }) => {
  
  return (
    <div className="main">
        <div id="root">
            <div className="card-container">
                <figure className="figure-banner">
                <img className="banner-img"
                    alt={title}
                    src={"https://image.tmdb.org/t/p/w1280"+image}
                />
                <h1 className="title-banner">{title}</h1>
                <p className="banner-p">
                    {description} 
                </p>
                </figure>
            </div>   
        </div>
    </div>
  );
};

export default Banner;
