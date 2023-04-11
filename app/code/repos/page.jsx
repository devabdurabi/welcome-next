// import Link from "next-link"
import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"
import { resolve } from "styled-jsx/css";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/devabdurabi/repos");

  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 sec loading

  const repos = await response.json();
  return repos;

  
}

const ReposPage = async () => {
  const repos = await fetchRepos()

  return (
    <div>
      <h2>Reposotiries</h2>
      <ul className='m-auto max-w-[800px] p-16 text-white repo-list'>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage
