import { styled, theme } from "@/stitches/stitches.config"
import { Dispatch, SetStateAction, useState } from "react"

const ModalWrapper = styled("div", {
    position: "absolute",
    width: "stretch",
    height: "stretch",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const Modal = styled("div", {
    position: "relative",
    background: "#222",
    width: "40vw",
    // height: "40vh",
    borderRadius: "1vh",
    display: "flex",
    minWidth: "300px",
    paddingInline: "20px",
    paddingBlock: "4vh",
    justifyContent: "center",
    gap: "4vh",
    alignItems: "left",
    flexDirection: "column",
    fontSize: "6ch",
    boxShadow: "0px 0px 100px teal",
    userSelect: "none"
})

const Username = styled("input", {
    position: "relative",
    fontSize: "inherit",
    padding: "10px",
    borderRadius: "10px",
    outline: "none",
    border: "none",
})

const Submit = styled("button", {
    background: "#222",
    alignSelf: "end",
    outline: "none",
    border: "none",
    fontSize: "inherit",
    cursor: "pointer"
})

type A = {
    token: string
    auth: (username: string) => void
}

export const AuthModal: React.FC<A> = ({token, auth}) => {

    const [value, setValue] = useState<string>('')

    const handleChange = (e: Event) => {
        setValue((e.currentTarget as HTMLInputElement).value)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === "Enter") auth(value)
    }

    return (token === "" &&
        <ModalWrapper>
            <Modal>
                    Enter your chat username:
                    <Username 
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        type={"text"} 
                        spellCheck={false}
                    />
                    <Submit
                        onClick={() => auth(value)}
                    >
                        Log in 
                    </Submit>
            </Modal>
        </ModalWrapper>
    )
}