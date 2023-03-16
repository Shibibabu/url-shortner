import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewUrl = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrlAndSetUrl = async () => {
      const result = await axios.get(`http://localhost:3000/${localStorage.getItem("urlhash")}`);
      setUrls(result.data);
    };
    fetchUrlAndSetUrl();
  }, [urls]);

  return (
    <div>
      {/* <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Original Url</th>
            <th>Short Url</th>
            <th>Click Count</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, idx) => (
            <tr key={idx}>
              <td>{url.origUrl}</td>
              <td>
                <a href={`${url.shortUrl}`}>{url.shortUrl}</a>
              </td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default ViewUrl;
