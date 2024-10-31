export default function ProfileInfo({props}){
    const {name, post, description} = props;

    return (
      <>
        <h2>Salut, je suis {name}</h2>
        <h3>Occupation : {post}</h3>
        <h4>{description}</h4>
      </>
    )
  }
  