import { IPaginationProps } from '@src/interfaces';
import { NextPage } from 'next';
import Image from 'next/image';

export const Pagination: NextPage<IPaginationProps> = ({
  pageSize,
  totalCount,
  currentPage,
  onChange,
}) => {
  const totalPage = Math.ceil(totalCount / pageSize);
  return (
    <div className="pagination">
      <div
        className={`item left${currentPage === 1 ? ' disabled' : ''}`}
        onClick={
          currentPage === 1 ? undefined : () => onChange(currentPage - 1)
        }
      >
        <Image
          src="/_images/icons/arrow-right.svg"
          alt="arrow-left"
          width="16"
          height="16"
          draggable="false"
        />
      </div>
      {Array(totalPage)
        .fill(null)
        .map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <div
              className={`item${currentPage === pageNum ? ' active' : ''}`}
              key={idx}
              onClick={() => onChange(pageNum)}
            >
              {pageNum}
            </div>
          );
        })}

      <div
        className={`item${currentPage === totalPage ? ' disabled' : ''}`}
        onClick={
          currentPage === totalPage
            ? undefined
            : () => onChange(currentPage + 1)
        }
      >
        <Image
          src="/_images/icons/arrow-right.svg"
          alt="arrow-right"
          width="16"
          height="16"
          draggable="false"
        />
      </div>
    </div>
  );
};
