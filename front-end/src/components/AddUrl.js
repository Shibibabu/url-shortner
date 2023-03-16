import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style/style.css';
const AddUrl = () => {
  const [url, setUrl] = useState("");
  const [hashedurl,setHashedurl] =useState("");
  const [error,setError] =useState("");
  useEffect(() => {
  }, [])
  
  const onSubmit = e => {
    e.preventDefault();
    setError("");
    if (!url) {
      alert("URL is required");
      return;
    }

    axios
      .post("http://localhost:3001/", { url })
      .then(res => {
        setHashedurl(res.data.urlhash)
      
      })
      .catch(err => {
        setError(err.response.data)
      });

    setUrl("");
  };
  const fetchOriginalUrl = async () => {
    setError("")
    window.open(`http://localhost:3001/${hashedurl}`, '_blank');
  };
  const handleValue =(value)=>{
    setUrl(value);
    setError("");
  }
  return (
    <div>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center main-sec">
          <h1 className="mb-2 fs-1">URL Shortener</h1>
          <form className="w-50 form-div" onSubmit={onSubmit}>
           <div className="contents">
           <input
              className="custom-input w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="http://samplesite.com"
              value={url}
              onChange={({ target }) => handleValue(target.value)}
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-danger m-5 form-submit-btn">
                Shorten!
              </button>
            </div>
           </div>
            {hashedurl && hashedurl.length>0 && 
            <div className="bottom-div">
             <p>Short url </p>
             <div onClick={fetchOriginalUrl} className="go-to-url"> <a href={`http://localhost:3001/${hashedurl}`} target="_blank">{`shbt/${hashedurl}`}</a></div>
            </div>}
            {error && error.length>0 && <p className="text-danger">{error}</p>}
          </form>
        </section>
      </main>
    </div>
  );
};

export default AddUrl;
