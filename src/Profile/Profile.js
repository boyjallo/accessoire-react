import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const { fullName, bio, profession } = props;
  const handleName = () => {
    alert(`Bonjour, je m'appelle ${fullName}`);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
    <img src="https://i.pinimg.com/564x/08/55/88/085588c17393f30fd6ac3f38d0667a3d.jpg" height={"380px"} width={"360px"} />
      <h1 style={{ color: "purple" }}>{fullName}</h1>
      <p style={{color: "black",fontSize: "30px", fontFamily : "cursive"}}>{bio}</p>
      <p style={{color: "black",fontSize: "30px",fontFamily : "cursive"}}>Profession: {profession}</p>
      {props.children}
      <button onClick={handleName} style={{fontFamily: "cursive"  ,fontSize: "20px", backgroundColor: "blueviolet", padding: "8px 10px"}}>Cliquez ici pour dire bonjour</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: " Ousmane Diao DIALLO",
  bio: " Bio : www.oneclique.com",
  profession: " Developpeur web junior",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
