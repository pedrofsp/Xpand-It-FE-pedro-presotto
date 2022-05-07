import React, { useEffect, useState } from 'react';
import './style.scss';
import TableItem from '../../components/tableItem';
import TopRevenueButton from '../../components/topRevenueButton';

export default function Home() {
  const [content, setContent] = useState([]);
  const [activeTopRev, setActiveTopRev] = useState(false);
  const [resOriginal, setResOriginal] = useState({});

  useEffect(() => {
    fetch('http://movie-challenge-api-xpand.azurewebsites.net/api/movies')
      .then((res) => res.json())
      .then((res) => {
        setContent(res.content);
        setResOriginal(res.content);
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

  function filterTop10Rev() {
    setContent(
      content.sort((a, b) => (a.revenue < b.revenue ? 1 : -1)).slice(0, 10)
    );
  }

  return (
    <div className="all-home">
      <div className="content-flex">
        <div>
          <h1>Movie ranking</h1>
          <TopRevenueButton
            Active={activeTopRev}
            onClick={() => {
              setActiveTopRev(!activeTopRev);
              if (activeTopRev) setContent(resOriginal);
              else filterTop10Rev();
              console.log('activeTopRev: ', activeTopRev);
            }}
          />
          <div className="flex-space"></div>
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
