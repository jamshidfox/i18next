import React from "react"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
const languages = [
  {
    code: "uz",
    name: "Uzbekcha",
    country_code: "uzb",
  },
  {
    code: "ru",
    name: "Русский",
    country_code: "rus",
  },
  {
    code: "en",
    name: "English",
    country_code: "eng",
  },
]
function App() {
  const { t } = useTranslation()

  const releaseDate = new Date("2021-03-07")
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Dropdown
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                >
                  <span className={`flag-icon flag-icon-${code} mx-2`}></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("welome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
    </div>
  )
}

export default App
