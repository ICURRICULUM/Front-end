import React, { useEffect } from 'react';
import { translateCore } from '@utils/translateCore';
import { UncompleteItem } from '@type/checkGraduation/types';

import XButton from '@assets/checkRequirement/xButton.svg';

interface CheckModalProps {
  isVisible: boolean;
  closeModal: () => void;
  title: string;
  value: string[] | UncompleteItem[] | null;
}

const CheckModal: React.FC<CheckModalProps> = ({ isVisible, closeModal, title, value }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  // value가 null일 경우 기본값으로 빈 배열 처리
  const validValue = value ?? [];

  const isStringArray = (value: string[] | UncompleteItem[]): value is string[] => {
    return typeof value[0] === 'string';
  };

  return (
    isVisible && (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-modalBack">
        <div className="flex h-[409px] w-[800px] flex-col items-center space-y-10 border border-black bg-white p-4 pb-20">
          <div className="flex w-full justify-end">
            <img src={XButton} onClick={closeModal} className="flex cursor-pointer" />
          </div>

          <div className="flex flex-col space-y-10">
            <p className="text-center text-2xl font-semibold">{title} 미이수 과목</p>

            <div className="max-h-[180px] flex-1 overflow-y-scroll border border-black">
              <table className="text-center">
                {isStringArray(validValue) && (
                  <>
                    <thead>
                      <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
                        <th className="w-[180px] border border-l-0 border-t-0 border-black px-4 py-2">
                          영역
                        </th>
                        <th className="w-[240px] border border-r-0 border-t-0 border-black px-4 py-2">
                          영역명
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {validValue
                        .slice()
                        .sort()
                        .map((item, index) => (
                          <tr key={index}>
                            <td className="w-[180px] border border-[#EEEEEE] px-4 py-2">{item}</td>
                            <td className="w-[240px] border border-[#EEEEEE] px-4 py-2">
                              {translateCore(item)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </>
                )}

                {!isStringArray(validValue) && (
                  <>
                    <thead>
                      <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
                        <th className="w-[180px] border border-l-0 border-t-0 border-black px-4 py-2">
                          학수번호
                        </th>
                        <th className="w-[240px] border border-t-0 border-black px-4 py-2">
                          과목명
                        </th>
                        <th className="w-[120px] border border-r-0 border-t-0 border-black px-4 py-2">
                          학점
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {validValue.map((item) => (
                        <tr key={item.id}>
                          <td className="w-[180px] border border-[#EEEEEE] px-4 py-2">
                            {item.code}
                          </td>
                          <td className="w-[240px] border border-[#EEEEEE] px-4 py-2">
                            {item.name}
                          </td>
                          <td className="w-[120px] border border-[#EEEEEE] px-4 py-2">
                            {item.credit}.0
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CheckModal;
