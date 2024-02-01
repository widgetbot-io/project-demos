import React, { useState } from 'react';
import Modal from "@/components/Modal";
import Image from "next/image";

import * as constants from '@/constants';
import { useStoreActions } from "@/store/hooks";

export default function AuthModal() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(constants.allowedImages[0]);

  const loginAction = useStoreActions(state => state.auth.login);

  const login = () => {
    if (!name) return;

    loginAction({
      name,
      avatarUrl: avatar
    })
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
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
          <label className="font-medium text-lg">Name</label>

          <input
            type="text"
            className="bg-neutral-700 rounded-lg p-2"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-2 mt-4">
          <label className="font-medium text-lg">Avatar</label>

          <div className="grid grid-cols-4 gap-4">
            {constants.allowedImages.map((path, idx) => (
              <Image
                className={`rounded-full cursor-pointer ${avatar === path ? 'border-4 border-green-500' : ''}`}
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
