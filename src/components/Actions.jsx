import { SectionTitle } from "./SectionTitle";

export const Actions = () => {
    return (
        <div className="action">
            <SectionTitle title="Actions" />
            <button >Generate Summary</button>
            <button>Generate Key Points</button>
            <button>Generate Quiz</button>
            <button>Ask Questions</button>
        </div>
    )
}