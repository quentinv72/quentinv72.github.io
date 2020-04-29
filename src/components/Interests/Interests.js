import React from "react";
import "./Interests.css";

export default function Interests(props) {
  const X = "X";
  const PX = `\\mathbb{P}(X)`;
  return (
    <div>
      <div className='text'>
        <h2>
          I spend most of my time reading about{" "}
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
          , I started playing when I was at university and have continued since.
        </h2>
      </div>
      <div className='text list'>
        <h3>Cantor's Theorem:</h3>
        <p>
          This is one of my <span style={{ fontWeight: "bold" }}>favorite</span>{" "}
          results in Mathematics. It's a beautiful result from Set Theory that
          gives us a relationship between the size of a set and it's power set.
          I find this result very deep, yet it is easy to fomulate and prove.{" "}
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
        <h3>Paul Institute</h3>
        <p>
          Lately I've really been into the work of the Paul brothers, Jai Paul
          and A.K. Paul. The Paul Institute was founded in 2016 by the two
          siblings, and has been releasing music ever since. Check out the Paul
          Institute playlist on Spotify.
        </p>
        <div className='spotify-player'>
          <iframe
            title='Spotify Playlist'
            src='https://open.spotify.com/embed/playlist/48zee8uSp4H7oKdWan7uDy'
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
            <li>The New Pope</li>
            <li>Platane Saison tree</li>
            <li>Barry</li>
            <li>Westworld, season 3</li>
          </ol>
          Let me know what you think.
        </p>
      </div>
    </div>
  );
}
