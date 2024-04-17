import React from 'react';

const Sports = () => {
  return (
    <div className="sports text-white">
      <h2 className="sports-text specialtext">
        <img alt="icon" width={'25px'} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/WhiteIcons/Sports.svg" /> Sports
      </h2>
      <div className="d-flex justify-content-between">
        <SportItem link="/sports/sportsbyid/4" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Cricket.svg" title="Cricket" />
        <SportItem link="/sports/sportsbyid/1" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Soccer.svg" title="Soccer" />
        <SportItem link="/sports/sportsbyid/2" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Tennis.svg" title="Tennis" />
        <SportItem link="/sports/raceschedule/7/ALL" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/horse-racing.webp" title="Horse Racing" />
        <SportItem link="/sports/raceschedule/4339/ALL" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Greyhound.svg" title="Greyhound Racing" />
        <SportItem link="/sports/sportsbyid/5" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/RU.svg" title="Rugby Union" />
        <SportItem link="/sports/sportsbyid/6" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Boxing.svg" title="Boxing" />
        <SportItem link="/casinos/games/esports" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/XG.svg" title="E-Sports" />
      </div>
      <div className="d-flex justify-content-between">
        <SportItem link="/sports/sportsbyid/7511" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Baseball.svg" title="Baseball" />
        <SportItem imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Virtual Sports.svg" title="Virtual Sports" />
        <SportItem link="/sports" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/tableTennis.svg" title="Table Tennis" />
        <SportItem link="/sports/sportsbyid/7522" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Basketball.svg" title="Basketball" />
        <SportItem link="/sports/sportsbyid/1477" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/RL.svg" title="Rugby League" />
        <SportItem link="/sports/sportsbyid/3503" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/Dart.svg" title="Dart" />
        <SportItem link="/sports/sportsbyid/6423" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/American Football.svg" title="American Football" />
        <SportItem link="/sports/sportsbyid/6422" imgSrc="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/landing-page-sw-images/8ball.svg" title="8 Ball Pool" />
      </div>
    </div>
  );
};

const SportItem = ({ link, imgSrc, title }) => {
  return (
    <div className="sport-item" tabIndex="0">
      <img width={'45%'} alt={title} src={imgSrc} />
      <h5 className="m-0" style={{fontSize:"11px"}}>{title}</h5>
    </div>
  );
};

export default Sports;
