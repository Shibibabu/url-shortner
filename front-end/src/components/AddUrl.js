import React, { useEffect, useState } from "react";
import axios from "axios";

const AddUrl = () => {
  const [url, setUrl] = useState("");
  const [hashedurl,setHashedurl] =useState("");

  useEffect(() => {
  }, [])
  
  const onSubmit = e => {
    e.preventDefault();

    if (!url) {
      alert("please enter something");
      return;
    }

    axios
      .post("http://localhost:3000/", { url })
      .then(res => {
        setHashedurl(res.data.urlhash)
      
      })
      .catch(err => {
        console.log(err.message);
      });

    setUrl("");
  };
  const fetchOriginalUrl = async () => {
    window.open(`http://localhost:3000/${hashedurl}`, '_blank');
  };
  return (
    <div>
      <main>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-2 fs-1">URL Shortener</h1>
          <form className="w-50" onSubmit={onSubmit}>
            <input
              className="w-100 border border-primary p-2 mb-2 fs-3 h-25"
              type="text"
              placeholder="http://samplesite.com"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-danger m-5">
                Shorten!
              </button>
            </div>
            {hashedurl && hashedurl.length>0 && 
            <>
            <p>Short url :{hashedurl}</p>
            <div onClick={fetchOriginalUrl}>Click to go to the url</div>
            </>}
          </form>
        </section>
      </main>
    </div>
  );
};

export default AddUrl;
