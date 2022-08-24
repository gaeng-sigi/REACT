// MovieApp 에서 data라는 이름으로 보내준 데이터를 기반으로 반복문
export default function Movie({ data }) {
    const { title, url, medium_cover_image, summary, genres } = data; // 구조 분할
    return (
        <li key={data.id}>
        <div>
            <h2>
            <a href={url}>{title}</a>
            </h2>
            <img src={medium_cover_image} alt={title} />
        </div>
        <ul className="genresList">
            {genres.map(
            (
                item,
                idx // item == genres의 요소들 , idx == 요소들을 반복문 돌릴 기준
            ) => (
                <li key={idx}>{item}</li>
            )
            )}
        </ul>

        <p className="summary">{summary}</p>
        </li>
    );
}
