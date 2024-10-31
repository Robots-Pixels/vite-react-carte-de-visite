export default function ContactLink({props}){

    const {youtube, tiktok} = props;

    return (
      <>
        <a href={youtube}><img className="contactLink" src="/youtube-svgrepo-com.png" alt="youtube"/></a>
        <a href={tiktok}><img className="contactLink" src="/tiktok-svgrepo-com.png" alt="tiktok"/></a>
      </>
    )
  }
  
