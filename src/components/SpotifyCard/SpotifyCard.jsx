import "./SpotifyCard.css";

const SpotifyCard = () => {
  return (
    <a
      href="https://open.spotify.com/playlist/37i9dQZF1Epu80pNUOpDha?si=Pmo8pyRMT9SB33FTbTuExQ&pi=uTDHz221T7mn0"
      target="_blank"
      rel="noopener noreferrer"
      className="spotify-card"
    >
      <div className="spotify-card-inner">
        <h4>
          playlist: <span>songs I am hooked to...</span>
        </h4>
        <p> A pure audiophile, hi quality music is top-notch priority. These are the songs I am listening to nowadays (repeat-mode level obsession)</p>
      </div>
    </a>
  );
};

export default SpotifyCard;
