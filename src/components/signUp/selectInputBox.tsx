import React, { useState } from 'react';

import UpArrow from '@assets/signUp/upArrow.svg';
import DownArrow from '@assets/signUp/downArrow.svg';

interface Item {
  id: number;
  name: string;
  value: string | number;
}

interface SelectInputBoxProps {
  title: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>> &
    React.Dispatch<React.SetStateAction<number>>;
  itemList: Item[];
}

const SelectInputBox: React.FC<SelectInputBoxProps> = ({ title, value, setValue, itemList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMajorType, setSelectedMajorType] = useState<string>(''); // 다중전공 선택 시 전공 종류 저장
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false); // 학과 선택 드롭다운

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleValue = (item: Item) => {
    setValue(item.value);
    setIsOpen(false);
  };

  const handleMajorTypeSelect = (type: string) => {
    setSelectedMajorType(type);
    setValue(''); // 전공 종류 선택 시 학과 초기화
    setIsOpen(false);
    setIsDepartmentOpen(true);
  };

  const handleDepartmentSelect = (department: Item) => {
    setValue(department.value);
    setIsDepartmentOpen(false);
  };

  const majorTypes = [
    { id: 1, name: '복수전공', value: '복수전공' },
    { id: 2, name: '부전공', value: '부전공' },
    { id: 3, name: '연계전공', value: '연계전공' },
    { id: 4, name: '융합전공', value: '융합전공' },
  ];

  const departmentList = {
    복수전공: [
      { id: 1, name: '기계공학과 / 기계공학', value: '기계공학과' },
      { id: 2, name: '화학공학과 / 화학공학', value: '화학공학과' },
      // 더 많은 학과 추가 가능
    ],
    부전공: [
      { id: 1, name: '항공우주공학과 / 항공우주공학', value: '항공우주공학과' },
      // 더 많은 학과 추가 가능
    ],
    연계전공: [
      { id: 1, name: '화학공학과 / 이차전지공학', value: '이차전지공학' },
      // 더 많은 학과 추가 가능
    ],
    융합전공: [
      { id: 1, name: '산업경영공학과 / 산업경영공학', value: '산업경영공학과' },
      // 더 많은 학과 추가 가능
    ],
  };

  return (
    <div className="w-80">
      <p className="mb-1">{title}</p>
      <div className="relative">
        {/* 학번 또는 주전공 선택 */}
        {title !== '다중전공' ? (
          <div
            className={`flex cursor-pointer flex-row items-center justify-between rounded-five border border-[#757575] p-4 text-[#757575] ${
              isOpen ? 'bg-[#EEEEEE]' : 'bg-white'
            }`}
            onClick={toggleDropdown}
          >
            {value === '' || value === 0 ? (
              <span>{title === '학번' ? '학번을 선택하세요.' : '주전공 학과를 선택하세요.'}</span>
            ) : (
              value
            )}
            <span>{isOpen ? <img src={UpArrow} /> : <img src={DownArrow} />}</span>
          </div>
        ) : (
          // 다중전공 선택 - 첫 번째 드롭다운 (전공 종류 선택)
          <>
            <div
              className={`flex cursor-pointer flex-row items-center justify-between rounded-five border border-[#757575] p-4 text-[#757575] ${
                isOpen ? 'bg-[#EEEEEE]' : 'bg-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedMajorType || '복수전공, 부전공, 연계전공, 융합전공 중 선택'}
              <span>{isOpen ? <img src={UpArrow} /> : <img src={DownArrow} />}</span>
            </div>
            {isOpen && (
              <div className="absolute z-50 w-full rounded-five border border-[#757575] bg-white">
                {majorTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => handleMajorTypeSelect(type.name)}
                    className="cursor-pointer border border-[#EEEEEE] p-4 text-[#757575] hover:bg-[#00AFEC] hover:text-white"
                  >
                    {type.name}
                  </div>
                ))}
              </div>
            )}

            {/* 두 번째 드롭다운 - 학과 선택 (선택한 전공 종류에 따라) */}
            {selectedMajorType && (
              <div className="relative mt-4">
                <div
                  className={`flex cursor-pointer flex-row items-center justify-between rounded-five border border-[#757575] p-4 text-[#757575] ${
                    isDepartmentOpen ? 'bg-[#EEEEEE]' : 'bg-white'
                  }`}
                  onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
                >
                  {value || `${selectedMajorType}에 해당하는 학과를 선택하세요`}
                  <span>{isDepartmentOpen ? <img src={UpArrow} /> : <img src={DownArrow} />}</span>
                </div>
                {isDepartmentOpen && (
                  <div className="absolute z-50 w-full rounded-five border border-[#757575] bg-white">
                    {departmentList[selectedMajorType].map((dept) => (
                      <div
                        key={dept.id}
                        onClick={() => handleDepartmentSelect(dept)}
                        className="cursor-pointer border border-[#EEEEEE] p-4 text-[#757575] hover:bg-[#00AFEC] hover:text-white"
                      >
                        {dept.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SelectInputBox;
