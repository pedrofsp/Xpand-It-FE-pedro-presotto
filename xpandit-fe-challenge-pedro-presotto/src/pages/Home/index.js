import React, { useEffect, useState } from 'react';
import './style.scss';
import TableItem from '../../components/tableItem';

export default function Home() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch('http://movie-challenge-api-xpand.azurewebsites.net/api/movies')
      .then((res) => res.json())
      .then((res) => {
        setContent(res.content);
      });
  }, []);

  function listContent() {
    return content.map((item) => (
      <TableItem
        Ranking={item.rank}
        Title={item.title}
        Year={item.year}
        Revenue={item.revenue}
        Id={item.id}
      />
    ));
  }

  return (
    <div className="all-home">
      <div className="content-flex">
        <div>
          <h1>Movie ranking</h1>
          <table>
            <tr>
              <th className="align-text">Ranking</th>
              <th>Title</th>
              <th>Year</th>
              <th>Revenue</th>
              <th></th>
            </tr>
            {content.length === 0 && <p>Loading...</p>}
            {listContent()}
          </table>
        </div>
      </div>
    </div>
  );
}
