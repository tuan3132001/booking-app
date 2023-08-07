import React, { useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  faBed,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === 'i'
            ? options[name] + 1
            : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/hotels', {
      state: { destination, date, options },
    });
  };
  return (
    <div>
      <div className="bannerSearch">
        <div className="searchItem">
          <FontAwesomeIcon
            icon={faBed}
            className="searchIcon"
          />
          <input
            type="text"
            placeholder="Bạn muốn đến đâu?"
            className="searchInput"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="searchItem">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="searchIcon"
          />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="searchText"
          >
            {`${format(date[0].startDate, 'MM/dd/yyyy')} 
                            - ${format(
                              date[0].endDate,
                              'MM/dd/yyyy',
                            )}  `}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>
        <div className="searchItem">
          <FontAwesomeIcon
            icon={faPerson}
            className="searchIcon"
          />
          <span
            className="searchText"
            onClick={() => setOpenOptions(true)}
          >
            {`${options.adult} người lớn · ${options.children} trẻ em · ${options.room} phòng`}
          </span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">
                  Người lớn
                </span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="counterReduceButton"
                    onClick={() =>
                      handleOption('adult', 'd')
                    }
                  >
                    -
                  </button>
                  <span className="counterNumber">
                    {options.adult}
                  </span>
                  <button
                    className="counterIncreaseButton"
                    onClick={() =>
                      handleOption('adult', 'i')
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Trẻ em</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="counterReduceButton"
                    onClick={() =>
                      handleOption('children', 'd')
                    }
                  >
                    -
                  </button>
                  <span className="counterNumber">
                    {options.children}
                  </span>
                  <button
                    className="counterIncreaseButton"
                    onClick={() =>
                      handleOption('children', 'i')
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Phòng</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="counterReduceButton"
                    onClick={() =>
                      handleOption('room', 'd')
                    }
                  >
                    -
                  </button>
                  <span className="counterNumber">
                    {options.room}
                  </span>
                  <button
                    className="counterIncreaseButton"
                    onClick={() =>
                      handleOption('room', 'i')
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <Button
                className="post"
                onClick={() => setOpenOptions(false)}
              >
                Xong{' '}
              </Button>
            </div>
          )}
        </div>
        <div className="searchItem">
          <button
            className="searchButton"
            onClick={handleSearch}
          >
            Tìm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
