import React, { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";

import * as constants from "@/constants";
import { useStoreActions } from "@/store/hooks";

export default function AuthModal() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(constants.allowedImages[0]);

  const loginAction = useStoreActions(state => state.auth.login);

  const login = () => {
    if (!name) return;

    loginAction({
      name,
      avatarUrl: avatar
    });
  };

  return (
    <div>
      <button className="rounded bg-neutral-700 px-4 py-1.5" onClick={() => setShowModal(true)}>
        Login
      </button>

      <Modal
        isOpen={showModal}
        title="Login to WidgetBot Demo"
        actionName="Login"
        onClose={() => setShowModal(false)}
        onActionClick={login}
      >
        <div className="flex flex-col gap-y-2">
          <label className="text-lg font-medium">Name</label>

          <input
            type="text"
            className="rounded-lg bg-neutral-700 p-2"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mt-4 flex flex-col gap-y-2">
          <label className="text-lg font-medium">Avatar</label>

          <div className="grid grid-cols-4 gap-4">
            {constants.allowedImages.map((path, idx) => (
              <Image
                className={`cursor-pointer rounded-full ${avatar === path ? "border-4 border-green-500" : ""}`}
                key={idx}
                src={path}
                alt="Profile Picture option"
                width={96}
                height={96}
                onClick={() => setAvatar(path)}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
