import React, { useEffect, useState } from 'react';
import './style.scss';
import TableItem from '../../components/tableItem';
import TopRevenueButton from '../../components/topRevenueButton';
import DropdownButton from '../../components/dropdownButton';

export default function Home() {
  const [content, setContent] = useState([]);
  const [originalContent, setOriginalContent] = useState([]);
  const [activeTopRev, setActiveTopRev] = useState(false);

  useEffect(() => {
    fetch('https://movie-challenge-api-xpand.azurewebsites.net/api/movies')
      .then((res) => res.json())
      .then((res) => {
        setContent(res.content);
        setOriginalContent(res.content);
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

  const propSetContent = (val) => {
    setContent(val);
  };

  return (
    <div className="all-home">
      <div className="content-flex">
        <div>
          <h1>Movie ranking</h1>
          <div className="buttons">
            <TopRevenueButton
              Active={activeTopRev}
              onClick={() => {
                setActiveTopRev(!activeTopRev);
                if (activeTopRev) {
                  setContent(
                    originalContent.sort((a, b) => (a.rank > b.rank ? 1 : -1))
                  );
                } else {
                  setContent(
                    originalContent
                      .sort((a, b) => (a.revenue < b.revenue ? 1 : -1))
                      .slice(0, 10)
                  );
                }
              }}
            />
            <DropdownButton
              OriginalContent={originalContent}
              propSetContent={propSetContent}
            />
          </div>
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
