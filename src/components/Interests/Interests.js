import React from "react";
import "./Interests.css";

export default function Interests(props) {
  return (
    <div>
      <div className='text'>
        <h2>
          I spend most of my time{" "}
          <span className='highlight' style={{ color: "#faa200" }}>
            coding
          </span>
          , reading about{" "}
          <span className='highlight' style={{ color: "#faa200" }}>
            Mathematics
          </span>
          , listening to{" "}
          <span className='highlight' style={{ color: "#faa200" }}>
            music
          </span>{" "}
          and watching{" "}
          <span className='highlight' style={{ color: "#faa200" }}>
            series
          </span>
          . I also really enjoy playing{" "}
          <span className='highlight' style={{ color: "#faa200" }}>
            squash
          </span>
          . I started playing when I was at university and have continued ever
          since.
        </h2>
      </div>
      <div className='text list'>
        <h3>Docker and Kubernetes</h3>
        <p>
          Recently I have started to develop an interest in containerization and
          infrastructure-as-code technologies.
        </p>
        <p>
          I have been reading{" "}
          <a
            href='https://www.amazon.ca/Cloud-Native-DevOps-Kubernetes-Applications/dp/1492040762'
            target='_blank'
            rel='noopener noreferrer'>
            <em>Cloud Native DevOps with Kubernetes</em>
          </a>{" "}
          by John Arundel and Justin Domingus.
        </p>
      </div>
      <div className='text list'>
        <h3>Cantor's Theorem:</h3>
        <p>
          This is one of my <span style={{ fontWeight: "bold" }}>favorite</span>{" "}
          results in Mathematics. It's a beautiful result from Set Theory that
          gives us a relationship between the size of a set and its power set.{" "}
        </p>
        <p>
          It is as follows: <br /> <br />
          If X is any set and P(X) is its power set, then |X|{"<"}|P(X)|, where
          |.| is the cardinality of the set.
        </p>
        <p>
          Click{" "}
          <a
            href='https://proofwiki.org/wiki/Cardinality_of_Set_less_than_Cardinality_of_Power_Set'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "#e54120" }}>
            here
          </a>{" "}
          for a proof.
        </p>
      </div>
      <div className='text list'>
        <h3>F & Q</h3>
        <p>
          F & Q is a collaborative playlists that a friend and I have been
          working on. It is a collection of our favorite songs of the moment.{" "}
        </p>
        <div className='spotify-player'>
          <iframe
            title='Spotify Playlist'
            src='https://open.spotify.com/embed/playlist/6gRQpV3t50gIQwffCeW1BA'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'></iframe>
        </div>
      </div>
      <div className='text list'>
        <h3>Television</h3>
        <p>
          My favorite shows of the 2019-2020 year are:
          <ol>
            <li>Mr. Robot, season 4</li>
            <li>The New Pope</li>
            <li>Platane</li>
            <li>Barry</li>
            <li>Westworld, season 3</li>
          </ol>
          Let me know what you think.
        </p>
      </div>
    </div>
  );
}
