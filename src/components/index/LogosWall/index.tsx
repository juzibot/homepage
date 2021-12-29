import { NextPage } from 'next';

const logos = [5, 6, 5, 6, 5, 6, 5, 6];

const LogosWall: NextPage = () => {
  return (
    <>
      <h1 className="title">我们的客户</h1>

      <div className="logos">
        {logos.map((item, index) => {
          return (
            <div className="logo-bar" key={index}>
              {Array(item)
                .fill(null)
                .map((_, idx) => {
                  return (
                    <div className="logo" key={`${index}-${idx}`}>
                      <img
                        src={`/images/logos/${index + 1}-${idx + 1}.svg`}
                        alt="logo"
                        draggable="false"
                      />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LogosWall;
