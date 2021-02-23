type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace Game. */
declare namespace Game {

    /** Namespace Common. */
    namespace Common {

        /** MsgId enum. */
        enum MsgId {
            Login_Request = 1,
            Login_Response = 2,
            RoomMember_Notify = 3,
            SetReady_Request = 4,
            SetReady_Response = 5,
            GameStart_Notify = 6,
            GameOver_Notify = 7,
            Exit_Request = 8,
            Exit_Response = 9,
            Exit_Notify = 10,
            GameSettle_Notify = 11
        }

        /** Properties of a LoginRequest. */
        interface ILoginRequest {

            /** LoginRequest user */
            user?: (Game.Common.IUserInfo|null);

            /** LoginRequest channel */
            channel?: (string|null);

            /** LoginRequest time */
            time?: (number|null);

            /** LoginRequest sign */
            sign?: (string|null);
        }

        /** Represents a LoginRequest. */
        class LoginRequest implements ILoginRequest {

            /**
             * Constructs a new LoginRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.ILoginRequest);

            /** LoginRequest user. */
            public user?: (Game.Common.IUserInfo|null);

            /** LoginRequest channel. */
            public channel: string;

            /** LoginRequest time. */
            public time: number;

            /** LoginRequest sign. */
            public sign: string;

            /**
             * Creates a new LoginRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginRequest instance
             */
            public static create(properties?: Game.Common.ILoginRequest): Game.Common.LoginRequest;

            /**
             * Encodes the specified LoginRequest message. Does not implicitly {@link Game.Common.LoginRequest.verify|verify} messages.
             * @param message LoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.ILoginRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link Game.Common.LoginRequest.verify|verify} messages.
             * @param message LoginRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.ILoginRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a LoginRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.LoginRequest;

            /**
             * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.LoginRequest;

            /**
             * Verifies a LoginRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LoginResponse. */
        interface ILoginResponse {

            /** LoginResponse status */
            status?: (number|null);

            /** LoginResponse msg */
            msg?: (string|null);

            /** LoginResponse room */
            room?: (Game.Common.IRoomInfo|null);

            /** LoginResponse members */
            members?: (Game.Common.IMemberInfo[]|null);
        }

        /** Represents a LoginResponse. */
        class LoginResponse implements ILoginResponse {

            /**
             * Constructs a new LoginResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.ILoginResponse);

            /** LoginResponse status. */
            public status: number;

            /** LoginResponse msg. */
            public msg: string;

            /** LoginResponse room. */
            public room?: (Game.Common.IRoomInfo|null);

            /** LoginResponse members. */
            public members: Game.Common.IMemberInfo[];

            /**
             * Creates a new LoginResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginResponse instance
             */
            public static create(properties?: Game.Common.ILoginResponse): Game.Common.LoginResponse;

            /**
             * Encodes the specified LoginResponse message. Does not implicitly {@link Game.Common.LoginResponse.verify|verify} messages.
             * @param message LoginResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.ILoginResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link Game.Common.LoginResponse.verify|verify} messages.
             * @param message LoginResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.ILoginResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a LoginResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.LoginResponse;

            /**
             * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.LoginResponse;

            /**
             * Verifies a LoginResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RoomMemberNotify. */
        interface IRoomMemberNotify {

            /** RoomMemberNotify members */
            members?: (Game.Common.IMemberInfo[]|null);
        }

        /** Represents a RoomMemberNotify. */
        class RoomMemberNotify implements IRoomMemberNotify {

            /**
             * Constructs a new RoomMemberNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IRoomMemberNotify);

            /** RoomMemberNotify members. */
            public members: Game.Common.IMemberInfo[];

            /**
             * Creates a new RoomMemberNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoomMemberNotify instance
             */
            public static create(properties?: Game.Common.IRoomMemberNotify): Game.Common.RoomMemberNotify;

            /**
             * Encodes the specified RoomMemberNotify message. Does not implicitly {@link Game.Common.RoomMemberNotify.verify|verify} messages.
             * @param message RoomMemberNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IRoomMemberNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RoomMemberNotify message, length delimited. Does not implicitly {@link Game.Common.RoomMemberNotify.verify|verify} messages.
             * @param message RoomMemberNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IRoomMemberNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomMemberNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoomMemberNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.RoomMemberNotify;

            /**
             * Decodes a RoomMemberNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoomMemberNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.RoomMemberNotify;

            /**
             * Verifies a RoomMemberNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a SetReadyRequest. */
        interface ISetReadyRequest {

            /** SetReadyRequest is_ready */
            is_ready?: (boolean|null);
        }

        /** Represents a SetReadyRequest. */
        class SetReadyRequest implements ISetReadyRequest {

            /**
             * Constructs a new SetReadyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.ISetReadyRequest);

            /** SetReadyRequest is_ready. */
            public is_ready: boolean;

            /**
             * Creates a new SetReadyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetReadyRequest instance
             */
            public static create(properties?: Game.Common.ISetReadyRequest): Game.Common.SetReadyRequest;

            /**
             * Encodes the specified SetReadyRequest message. Does not implicitly {@link Game.Common.SetReadyRequest.verify|verify} messages.
             * @param message SetReadyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.ISetReadyRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SetReadyRequest message, length delimited. Does not implicitly {@link Game.Common.SetReadyRequest.verify|verify} messages.
             * @param message SetReadyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.ISetReadyRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SetReadyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetReadyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.SetReadyRequest;

            /**
             * Decodes a SetReadyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetReadyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.SetReadyRequest;

            /**
             * Verifies a SetReadyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a SetReadyResponse. */
        interface ISetReadyResponse {

            /** SetReadyResponse status */
            status?: (number|null);

            /** SetReadyResponse msg */
            msg?: (string|null);
        }

        /** Represents a SetReadyResponse. */
        class SetReadyResponse implements ISetReadyResponse {

            /**
             * Constructs a new SetReadyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.ISetReadyResponse);

            /** SetReadyResponse status. */
            public status: number;

            /** SetReadyResponse msg. */
            public msg: string;

            /**
             * Creates a new SetReadyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetReadyResponse instance
             */
            public static create(properties?: Game.Common.ISetReadyResponse): Game.Common.SetReadyResponse;

            /**
             * Encodes the specified SetReadyResponse message. Does not implicitly {@link Game.Common.SetReadyResponse.verify|verify} messages.
             * @param message SetReadyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.ISetReadyResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified SetReadyResponse message, length delimited. Does not implicitly {@link Game.Common.SetReadyResponse.verify|verify} messages.
             * @param message SetReadyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.ISetReadyResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a SetReadyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SetReadyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.SetReadyResponse;

            /**
             * Decodes a SetReadyResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SetReadyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.SetReadyResponse;

            /**
             * Verifies a SetReadyResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GameStartNotify. */
        interface IGameStartNotify {
        }

        /** Represents a GameStartNotify. */
        class GameStartNotify implements IGameStartNotify {

            /**
             * Constructs a new GameStartNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IGameStartNotify);

            /**
             * Creates a new GameStartNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameStartNotify instance
             */
            public static create(properties?: Game.Common.IGameStartNotify): Game.Common.GameStartNotify;

            /**
             * Encodes the specified GameStartNotify message. Does not implicitly {@link Game.Common.GameStartNotify.verify|verify} messages.
             * @param message GameStartNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IGameStartNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GameStartNotify message, length delimited. Does not implicitly {@link Game.Common.GameStartNotify.verify|verify} messages.
             * @param message GameStartNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IGameStartNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameStartNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameStartNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.GameStartNotify;

            /**
             * Decodes a GameStartNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameStartNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.GameStartNotify;

            /**
             * Verifies a GameStartNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GameOverNotify. */
        interface IGameOverNotify {
        }

        /** Represents a GameOverNotify. */
        class GameOverNotify implements IGameOverNotify {

            /**
             * Constructs a new GameOverNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IGameOverNotify);

            /**
             * Creates a new GameOverNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameOverNotify instance
             */
            public static create(properties?: Game.Common.IGameOverNotify): Game.Common.GameOverNotify;

            /**
             * Encodes the specified GameOverNotify message. Does not implicitly {@link Game.Common.GameOverNotify.verify|verify} messages.
             * @param message GameOverNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IGameOverNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GameOverNotify message, length delimited. Does not implicitly {@link Game.Common.GameOverNotify.verify|verify} messages.
             * @param message GameOverNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IGameOverNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameOverNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameOverNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.GameOverNotify;

            /**
             * Decodes a GameOverNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameOverNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.GameOverNotify;

            /**
             * Verifies a GameOverNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExitRequest. */
        interface IExitRequest {
        }

        /** Represents an ExitRequest. */
        class ExitRequest implements IExitRequest {

            /**
             * Constructs a new ExitRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IExitRequest);

            /**
             * Creates a new ExitRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExitRequest instance
             */
            public static create(properties?: Game.Common.IExitRequest): Game.Common.ExitRequest;

            /**
             * Encodes the specified ExitRequest message. Does not implicitly {@link Game.Common.ExitRequest.verify|verify} messages.
             * @param message ExitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IExitRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ExitRequest message, length delimited. Does not implicitly {@link Game.Common.ExitRequest.verify|verify} messages.
             * @param message ExitRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IExitRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ExitRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.ExitRequest;

            /**
             * Decodes an ExitRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.ExitRequest;

            /**
             * Verifies an ExitRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExitResponse. */
        interface IExitResponse {

            /** ExitResponse status */
            status?: (number|null);

            /** ExitResponse msg */
            msg?: (string|null);
        }

        /** Represents an ExitResponse. */
        class ExitResponse implements IExitResponse {

            /**
             * Constructs a new ExitResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IExitResponse);

            /** ExitResponse status. */
            public status: number;

            /** ExitResponse msg. */
            public msg: string;

            /**
             * Creates a new ExitResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExitResponse instance
             */
            public static create(properties?: Game.Common.IExitResponse): Game.Common.ExitResponse;

            /**
             * Encodes the specified ExitResponse message. Does not implicitly {@link Game.Common.ExitResponse.verify|verify} messages.
             * @param message ExitResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IExitResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ExitResponse message, length delimited. Does not implicitly {@link Game.Common.ExitResponse.verify|verify} messages.
             * @param message ExitResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IExitResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ExitResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExitResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.ExitResponse;

            /**
             * Decodes an ExitResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExitResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.ExitResponse;

            /**
             * Verifies an ExitResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExitNotify. */
        interface IExitNotify {

            /** ExitNotify uid */
            uid?: (string|null);
        }

        /** Represents an ExitNotify. */
        class ExitNotify implements IExitNotify {

            /**
             * Constructs a new ExitNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IExitNotify);

            /** ExitNotify uid. */
            public uid: string;

            /**
             * Creates a new ExitNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExitNotify instance
             */
            public static create(properties?: Game.Common.IExitNotify): Game.Common.ExitNotify;

            /**
             * Encodes the specified ExitNotify message. Does not implicitly {@link Game.Common.ExitNotify.verify|verify} messages.
             * @param message ExitNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IExitNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ExitNotify message, length delimited. Does not implicitly {@link Game.Common.ExitNotify.verify|verify} messages.
             * @param message ExitNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IExitNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ExitNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExitNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.ExitNotify;

            /**
             * Decodes an ExitNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExitNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.ExitNotify;

            /**
             * Verifies an ExitNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GameSettleNotify. */
        interface IGameSettleNotify {

            /** GameSettleNotify ranks */
            ranks?: (Game.Common.IRankInfo[]|null);

            /** GameSettleNotify mine */
            mine?: (Game.Common.IRankInfo|null);
        }

        /** Represents a GameSettleNotify. */
        class GameSettleNotify implements IGameSettleNotify {

            /**
             * Constructs a new GameSettleNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IGameSettleNotify);

            /** GameSettleNotify ranks. */
            public ranks: Game.Common.IRankInfo[];

            /** GameSettleNotify mine. */
            public mine?: (Game.Common.IRankInfo|null);

            /**
             * Creates a new GameSettleNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameSettleNotify instance
             */
            public static create(properties?: Game.Common.IGameSettleNotify): Game.Common.GameSettleNotify;

            /**
             * Encodes the specified GameSettleNotify message. Does not implicitly {@link Game.Common.GameSettleNotify.verify|verify} messages.
             * @param message GameSettleNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IGameSettleNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GameSettleNotify message, length delimited. Does not implicitly {@link Game.Common.GameSettleNotify.verify|verify} messages.
             * @param message GameSettleNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IGameSettleNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GameSettleNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameSettleNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.GameSettleNotify;

            /**
             * Decodes a GameSettleNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameSettleNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.GameSettleNotify;

            /**
             * Verifies a GameSettleNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a UserInfo. */
        interface IUserInfo {

            /** UserInfo uid */
            uid?: (string|null);

            /** UserInfo nick */
            nick?: (string|null);

            /** UserInfo avatar */
            avatar?: (string|null);

            /** UserInfo sex */
            sex?: (number|null);
        }

        /** Represents a UserInfo. */
        class UserInfo implements IUserInfo {

            /**
             * Constructs a new UserInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IUserInfo);

            /** UserInfo uid. */
            public uid: string;

            /** UserInfo nick. */
            public nick: string;

            /** UserInfo avatar. */
            public avatar: string;

            /** UserInfo sex. */
            public sex: number;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserInfo instance
             */
            public static create(properties?: Game.Common.IUserInfo): Game.Common.UserInfo;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link Game.Common.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IUserInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link Game.Common.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IUserInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.UserInfo;

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.UserInfo;

            /**
             * Verifies a UserInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RoomInfo. */
        interface IRoomInfo {

            /** RoomInfo room_id */
            room_id?: (string|null);

            /** RoomInfo owner_id */
            owner_id?: (string|null);

            /** RoomInfo owner_name */
            owner_name?: (string|null);

            /** RoomInfo choose */
            choose?: (string|null);

            /** RoomInfo size */
            size?: (number|null);

            /** RoomInfo people */
            people?: (number|null);

            /** RoomInfo status */
            status?: (number|null);
        }

        /** Represents a RoomInfo. */
        class RoomInfo implements IRoomInfo {

            /**
             * Constructs a new RoomInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IRoomInfo);

            /** RoomInfo room_id. */
            public room_id: string;

            /** RoomInfo owner_id. */
            public owner_id: string;

            /** RoomInfo owner_name. */
            public owner_name: string;

            /** RoomInfo choose. */
            public choose: string;

            /** RoomInfo size. */
            public size: number;

            /** RoomInfo people. */
            public people: number;

            /** RoomInfo status. */
            public status: number;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoomInfo instance
             */
            public static create(properties?: Game.Common.IRoomInfo): Game.Common.RoomInfo;

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link Game.Common.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link Game.Common.RoomInfo.verify|verify} messages.
             * @param message RoomInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.RoomInfo;

            /**
             * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.RoomInfo;

            /**
             * Verifies a RoomInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a MemberInfo. */
        interface IMemberInfo {

            /** MemberInfo user */
            user?: (Game.Common.IUserInfo|null);

            /** MemberInfo seat */
            seat?: (number|null);

            /** MemberInfo is_owner */
            is_owner?: (boolean|null);

            /** MemberInfo is_ready */
            is_ready?: (boolean|null);

            /** MemberInfo is_online */
            is_online?: (boolean|null);
        }

        /** Represents a MemberInfo. */
        class MemberInfo implements IMemberInfo {

            /**
             * Constructs a new MemberInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IMemberInfo);

            /** MemberInfo user. */
            public user?: (Game.Common.IUserInfo|null);

            /** MemberInfo seat. */
            public seat: number;

            /** MemberInfo is_owner. */
            public is_owner: boolean;

            /** MemberInfo is_ready. */
            public is_ready: boolean;

            /** MemberInfo is_online. */
            public is_online: boolean;

            /**
             * Creates a new MemberInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MemberInfo instance
             */
            public static create(properties?: Game.Common.IMemberInfo): Game.Common.MemberInfo;

            /**
             * Encodes the specified MemberInfo message. Does not implicitly {@link Game.Common.MemberInfo.verify|verify} messages.
             * @param message MemberInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IMemberInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified MemberInfo message, length delimited. Does not implicitly {@link Game.Common.MemberInfo.verify|verify} messages.
             * @param message MemberInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IMemberInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a MemberInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.MemberInfo;

            /**
             * Decodes a MemberInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.MemberInfo;

            /**
             * Verifies a MemberInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RankInfo. */
        interface IRankInfo {

            /** RankInfo user */
            user?: (Game.Common.IUserInfo|null);

            /** RankInfo rank */
            rank?: (number|null);

            /** RankInfo score */
            score?: (number|null);
        }

        /** Represents a RankInfo. */
        class RankInfo implements IRankInfo {

            /**
             * Constructs a new RankInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Common.IRankInfo);

            /** RankInfo user. */
            public user?: (Game.Common.IUserInfo|null);

            /** RankInfo rank. */
            public rank: number;

            /** RankInfo score. */
            public score: number;

            /**
             * Creates a new RankInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RankInfo instance
             */
            public static create(properties?: Game.Common.IRankInfo): Game.Common.RankInfo;

            /**
             * Encodes the specified RankInfo message. Does not implicitly {@link Game.Common.RankInfo.verify|verify} messages.
             * @param message RankInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Common.IRankInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link Game.Common.RankInfo.verify|verify} messages.
             * @param message RankInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Common.IRankInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RankInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Common.RankInfo;

            /**
             * Decodes a RankInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Common.RankInfo;

            /**
             * Verifies a RankInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Namespace Fivestone. */
    namespace Fivestone {

        /** MsgId enum. */
        enum MsgId {
            ChessBoard_Request = 10301,
            ChessBoard_Response = 10302,
            Act_Request = 10303,
            Act_Response = 10304,
            Act_Notify = 10305,
            Round_Notify = 10306,
            GiveUp_Request = 10307,
            GiveUp_Response = 10308,
            GiveUp_Notify = 10309,
            Peace_Request = 10311,
            Peace_Response = 10312,
            Peace_Notify = 10313,
            ConfirmPeace_Request = 10314,
            ConfirmPeace_Response = 10315,
            ConfirmPeace_Notify = 10316,
            Links_Notify = 10317
        }

        /** Properties of a ChessBoardRequest. */
        interface IChessBoardRequest {
        }

        /** Represents a ChessBoardRequest. */
        class ChessBoardRequest implements IChessBoardRequest {

            /**
             * Constructs a new ChessBoardRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IChessBoardRequest);

            /**
             * Creates a new ChessBoardRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChessBoardRequest instance
             */
            public static create(properties?: Game.Fivestone.IChessBoardRequest): Game.Fivestone.ChessBoardRequest;

            /**
             * Encodes the specified ChessBoardRequest message. Does not implicitly {@link Game.Fivestone.ChessBoardRequest.verify|verify} messages.
             * @param message ChessBoardRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IChessBoardRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ChessBoardRequest message, length delimited. Does not implicitly {@link Game.Fivestone.ChessBoardRequest.verify|verify} messages.
             * @param message ChessBoardRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IChessBoardRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ChessBoardRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChessBoardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ChessBoardRequest;

            /**
             * Decodes a ChessBoardRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChessBoardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ChessBoardRequest;

            /**
             * Verifies a ChessBoardRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ChessBoardResponse. */
        interface IChessBoardResponse {

            /** ChessBoardResponse status */
            status?: (number|null);

            /** ChessBoardResponse msg */
            msg?: (string|null);

            /** ChessBoardResponse ids */
            ids?: (string[]|null);

            /** ChessBoardResponse cards */
            cards?: (number[]|null);

            /** ChessBoardResponse next */
            next?: (string|null);

            /** ChessBoardResponse time */
            time?: (number|null);
        }

        /** Represents a ChessBoardResponse. */
        class ChessBoardResponse implements IChessBoardResponse {

            /**
             * Constructs a new ChessBoardResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IChessBoardResponse);

            /** ChessBoardResponse status. */
            public status: number;

            /** ChessBoardResponse msg. */
            public msg: string;

            /** ChessBoardResponse ids. */
            public ids: string[];

            /** ChessBoardResponse cards. */
            public cards: number[];

            /** ChessBoardResponse next. */
            public next: string;

            /** ChessBoardResponse time. */
            public time: number;

            /**
             * Creates a new ChessBoardResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChessBoardResponse instance
             */
            public static create(properties?: Game.Fivestone.IChessBoardResponse): Game.Fivestone.ChessBoardResponse;

            /**
             * Encodes the specified ChessBoardResponse message. Does not implicitly {@link Game.Fivestone.ChessBoardResponse.verify|verify} messages.
             * @param message ChessBoardResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IChessBoardResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ChessBoardResponse message, length delimited. Does not implicitly {@link Game.Fivestone.ChessBoardResponse.verify|verify} messages.
             * @param message ChessBoardResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IChessBoardResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ChessBoardResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChessBoardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ChessBoardResponse;

            /**
             * Decodes a ChessBoardResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChessBoardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ChessBoardResponse;

            /**
             * Verifies a ChessBoardResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ActRequest. */
        interface IActRequest {

            /** ActRequest x */
            x?: (number|null);

            /** ActRequest y */
            y?: (number|null);
        }

        /** Represents an ActRequest. */
        class ActRequest implements IActRequest {

            /**
             * Constructs a new ActRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IActRequest);

            /** ActRequest x. */
            public x: number;

            /** ActRequest y. */
            public y: number;

            /**
             * Creates a new ActRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActRequest instance
             */
            public static create(properties?: Game.Fivestone.IActRequest): Game.Fivestone.ActRequest;

            /**
             * Encodes the specified ActRequest message. Does not implicitly {@link Game.Fivestone.ActRequest.verify|verify} messages.
             * @param message ActRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IActRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ActRequest message, length delimited. Does not implicitly {@link Game.Fivestone.ActRequest.verify|verify} messages.
             * @param message ActRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IActRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ActRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ActRequest;

            /**
             * Decodes an ActRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ActRequest;

            /**
             * Verifies an ActRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ActResponse. */
        interface IActResponse {

            /** ActResponse status */
            status?: (number|null);

            /** ActResponse msg */
            msg?: (string|null);

            /** ActResponse card */
            card?: (Game.Fivestone.IChess|null);
        }

        /** Represents an ActResponse. */
        class ActResponse implements IActResponse {

            /**
             * Constructs a new ActResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IActResponse);

            /** ActResponse status. */
            public status: number;

            /** ActResponse msg. */
            public msg: string;

            /** ActResponse card. */
            public card?: (Game.Fivestone.IChess|null);

            /**
             * Creates a new ActResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActResponse instance
             */
            public static create(properties?: Game.Fivestone.IActResponse): Game.Fivestone.ActResponse;

            /**
             * Encodes the specified ActResponse message. Does not implicitly {@link Game.Fivestone.ActResponse.verify|verify} messages.
             * @param message ActResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IActResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ActResponse message, length delimited. Does not implicitly {@link Game.Fivestone.ActResponse.verify|verify} messages.
             * @param message ActResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IActResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ActResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ActResponse;

            /**
             * Decodes an ActResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ActResponse;

            /**
             * Verifies an ActResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ActNotify. */
        interface IActNotify {

            /** ActNotify uid */
            uid?: (string|null);

            /** ActNotify card */
            card?: (Game.Fivestone.IChess|null);

            /** ActNotify cards */
            cards?: (number[]|null);
        }

        /** Represents an ActNotify. */
        class ActNotify implements IActNotify {

            /**
             * Constructs a new ActNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IActNotify);

            /** ActNotify uid. */
            public uid: string;

            /** ActNotify card. */
            public card?: (Game.Fivestone.IChess|null);

            /** ActNotify cards. */
            public cards: number[];

            /**
             * Creates a new ActNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActNotify instance
             */
            public static create(properties?: Game.Fivestone.IActNotify): Game.Fivestone.ActNotify;

            /**
             * Encodes the specified ActNotify message. Does not implicitly {@link Game.Fivestone.ActNotify.verify|verify} messages.
             * @param message ActNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IActNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ActNotify message, length delimited. Does not implicitly {@link Game.Fivestone.ActNotify.verify|verify} messages.
             * @param message ActNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IActNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ActNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ActNotify;

            /**
             * Decodes an ActNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ActNotify;

            /**
             * Verifies an ActNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RoundNotify. */
        interface IRoundNotify {

            /** RoundNotify uid */
            uid?: (string|null);

            /** RoundNotify time */
            time?: (number|null);
        }

        /** Represents a RoundNotify. */
        class RoundNotify implements IRoundNotify {

            /**
             * Constructs a new RoundNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IRoundNotify);

            /** RoundNotify uid. */
            public uid: string;

            /** RoundNotify time. */
            public time: number;

            /**
             * Creates a new RoundNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoundNotify instance
             */
            public static create(properties?: Game.Fivestone.IRoundNotify): Game.Fivestone.RoundNotify;

            /**
             * Encodes the specified RoundNotify message. Does not implicitly {@link Game.Fivestone.RoundNotify.verify|verify} messages.
             * @param message RoundNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IRoundNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RoundNotify message, length delimited. Does not implicitly {@link Game.Fivestone.RoundNotify.verify|verify} messages.
             * @param message RoundNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IRoundNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoundNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoundNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.RoundNotify;

            /**
             * Decodes a RoundNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoundNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.RoundNotify;

            /**
             * Verifies a RoundNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GiveUpRequest. */
        interface IGiveUpRequest {
        }

        /** Represents a GiveUpRequest. */
        class GiveUpRequest implements IGiveUpRequest {

            /**
             * Constructs a new GiveUpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IGiveUpRequest);

            /**
             * Creates a new GiveUpRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GiveUpRequest instance
             */
            public static create(properties?: Game.Fivestone.IGiveUpRequest): Game.Fivestone.GiveUpRequest;

            /**
             * Encodes the specified GiveUpRequest message. Does not implicitly {@link Game.Fivestone.GiveUpRequest.verify|verify} messages.
             * @param message GiveUpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IGiveUpRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GiveUpRequest message, length delimited. Does not implicitly {@link Game.Fivestone.GiveUpRequest.verify|verify} messages.
             * @param message GiveUpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IGiveUpRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GiveUpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GiveUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.GiveUpRequest;

            /**
             * Decodes a GiveUpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GiveUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.GiveUpRequest;

            /**
             * Verifies a GiveUpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GiveUpResponse. */
        interface IGiveUpResponse {

            /** GiveUpResponse status */
            status?: (number|null);

            /** GiveUpResponse msg */
            msg?: (string|null);
        }

        /** Represents a GiveUpResponse. */
        class GiveUpResponse implements IGiveUpResponse {

            /**
             * Constructs a new GiveUpResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IGiveUpResponse);

            /** GiveUpResponse status. */
            public status: number;

            /** GiveUpResponse msg. */
            public msg: string;

            /**
             * Creates a new GiveUpResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GiveUpResponse instance
             */
            public static create(properties?: Game.Fivestone.IGiveUpResponse): Game.Fivestone.GiveUpResponse;

            /**
             * Encodes the specified GiveUpResponse message. Does not implicitly {@link Game.Fivestone.GiveUpResponse.verify|verify} messages.
             * @param message GiveUpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IGiveUpResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GiveUpResponse message, length delimited. Does not implicitly {@link Game.Fivestone.GiveUpResponse.verify|verify} messages.
             * @param message GiveUpResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IGiveUpResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GiveUpResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GiveUpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.GiveUpResponse;

            /**
             * Decodes a GiveUpResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GiveUpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.GiveUpResponse;

            /**
             * Verifies a GiveUpResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GiveUpNotify. */
        interface IGiveUpNotify {

            /** GiveUpNotify uid */
            uid?: (string|null);
        }

        /** Represents a GiveUpNotify. */
        class GiveUpNotify implements IGiveUpNotify {

            /**
             * Constructs a new GiveUpNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IGiveUpNotify);

            /** GiveUpNotify uid. */
            public uid: string;

            /**
             * Creates a new GiveUpNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GiveUpNotify instance
             */
            public static create(properties?: Game.Fivestone.IGiveUpNotify): Game.Fivestone.GiveUpNotify;

            /**
             * Encodes the specified GiveUpNotify message. Does not implicitly {@link Game.Fivestone.GiveUpNotify.verify|verify} messages.
             * @param message GiveUpNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IGiveUpNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GiveUpNotify message, length delimited. Does not implicitly {@link Game.Fivestone.GiveUpNotify.verify|verify} messages.
             * @param message GiveUpNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IGiveUpNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GiveUpNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GiveUpNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.GiveUpNotify;

            /**
             * Decodes a GiveUpNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GiveUpNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.GiveUpNotify;

            /**
             * Verifies a GiveUpNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a PeaceRequest. */
        interface IPeaceRequest {
        }

        /** Represents a PeaceRequest. */
        class PeaceRequest implements IPeaceRequest {

            /**
             * Constructs a new PeaceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IPeaceRequest);

            /**
             * Creates a new PeaceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PeaceRequest instance
             */
            public static create(properties?: Game.Fivestone.IPeaceRequest): Game.Fivestone.PeaceRequest;

            /**
             * Encodes the specified PeaceRequest message. Does not implicitly {@link Game.Fivestone.PeaceRequest.verify|verify} messages.
             * @param message PeaceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IPeaceRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified PeaceRequest message, length delimited. Does not implicitly {@link Game.Fivestone.PeaceRequest.verify|verify} messages.
             * @param message PeaceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IPeaceRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PeaceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.PeaceRequest;

            /**
             * Decodes a PeaceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.PeaceRequest;

            /**
             * Verifies a PeaceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a PeaceResponse. */
        interface IPeaceResponse {

            /** PeaceResponse status */
            status?: (number|null);

            /** PeaceResponse msg */
            msg?: (string|null);
        }

        /** Represents a PeaceResponse. */
        class PeaceResponse implements IPeaceResponse {

            /**
             * Constructs a new PeaceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IPeaceResponse);

            /** PeaceResponse status. */
            public status: number;

            /** PeaceResponse msg. */
            public msg: string;

            /**
             * Creates a new PeaceResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PeaceResponse instance
             */
            public static create(properties?: Game.Fivestone.IPeaceResponse): Game.Fivestone.PeaceResponse;

            /**
             * Encodes the specified PeaceResponse message. Does not implicitly {@link Game.Fivestone.PeaceResponse.verify|verify} messages.
             * @param message PeaceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IPeaceResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified PeaceResponse message, length delimited. Does not implicitly {@link Game.Fivestone.PeaceResponse.verify|verify} messages.
             * @param message PeaceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IPeaceResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PeaceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.PeaceResponse;

            /**
             * Decodes a PeaceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.PeaceResponse;

            /**
             * Verifies a PeaceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a PeaceNotify. */
        interface IPeaceNotify {

            /** PeaceNotify uid */
            uid?: (string|null);
        }

        /** Represents a PeaceNotify. */
        class PeaceNotify implements IPeaceNotify {

            /**
             * Constructs a new PeaceNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IPeaceNotify);

            /** PeaceNotify uid. */
            public uid: string;

            /**
             * Creates a new PeaceNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PeaceNotify instance
             */
            public static create(properties?: Game.Fivestone.IPeaceNotify): Game.Fivestone.PeaceNotify;

            /**
             * Encodes the specified PeaceNotify message. Does not implicitly {@link Game.Fivestone.PeaceNotify.verify|verify} messages.
             * @param message PeaceNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IPeaceNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified PeaceNotify message, length delimited. Does not implicitly {@link Game.Fivestone.PeaceNotify.verify|verify} messages.
             * @param message PeaceNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IPeaceNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PeaceNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.PeaceNotify;

            /**
             * Decodes a PeaceNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.PeaceNotify;

            /**
             * Verifies a PeaceNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ConfirmPeaceRequest. */
        interface IConfirmPeaceRequest {
        }

        /** Represents a ConfirmPeaceRequest. */
        class ConfirmPeaceRequest implements IConfirmPeaceRequest {

            /**
             * Constructs a new ConfirmPeaceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IConfirmPeaceRequest);

            /**
             * Creates a new ConfirmPeaceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConfirmPeaceRequest instance
             */
            public static create(properties?: Game.Fivestone.IConfirmPeaceRequest): Game.Fivestone.ConfirmPeaceRequest;

            /**
             * Encodes the specified ConfirmPeaceRequest message. Does not implicitly {@link Game.Fivestone.ConfirmPeaceRequest.verify|verify} messages.
             * @param message ConfirmPeaceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IConfirmPeaceRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ConfirmPeaceRequest message, length delimited. Does not implicitly {@link Game.Fivestone.ConfirmPeaceRequest.verify|verify} messages.
             * @param message ConfirmPeaceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IConfirmPeaceRequest, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ConfirmPeaceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConfirmPeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ConfirmPeaceRequest;

            /**
             * Decodes a ConfirmPeaceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConfirmPeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ConfirmPeaceRequest;

            /**
             * Verifies a ConfirmPeaceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ConfirmPeaceResponse. */
        interface IConfirmPeaceResponse {

            /** ConfirmPeaceResponse status */
            status?: (number|null);

            /** ConfirmPeaceResponse msg */
            msg?: (string|null);
        }

        /** Represents a ConfirmPeaceResponse. */
        class ConfirmPeaceResponse implements IConfirmPeaceResponse {

            /**
             * Constructs a new ConfirmPeaceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IConfirmPeaceResponse);

            /** ConfirmPeaceResponse status. */
            public status: number;

            /** ConfirmPeaceResponse msg. */
            public msg: string;

            /**
             * Creates a new ConfirmPeaceResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConfirmPeaceResponse instance
             */
            public static create(properties?: Game.Fivestone.IConfirmPeaceResponse): Game.Fivestone.ConfirmPeaceResponse;

            /**
             * Encodes the specified ConfirmPeaceResponse message. Does not implicitly {@link Game.Fivestone.ConfirmPeaceResponse.verify|verify} messages.
             * @param message ConfirmPeaceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IConfirmPeaceResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ConfirmPeaceResponse message, length delimited. Does not implicitly {@link Game.Fivestone.ConfirmPeaceResponse.verify|verify} messages.
             * @param message ConfirmPeaceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IConfirmPeaceResponse, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ConfirmPeaceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConfirmPeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ConfirmPeaceResponse;

            /**
             * Decodes a ConfirmPeaceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConfirmPeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ConfirmPeaceResponse;

            /**
             * Verifies a ConfirmPeaceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ConfirmPeaceNotify. */
        interface IConfirmPeaceNotify {

            /** ConfirmPeaceNotify uid */
            uid?: (string|null);
        }

        /** Represents a ConfirmPeaceNotify. */
        class ConfirmPeaceNotify implements IConfirmPeaceNotify {

            /**
             * Constructs a new ConfirmPeaceNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IConfirmPeaceNotify);

            /** ConfirmPeaceNotify uid. */
            public uid: string;

            /**
             * Creates a new ConfirmPeaceNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConfirmPeaceNotify instance
             */
            public static create(properties?: Game.Fivestone.IConfirmPeaceNotify): Game.Fivestone.ConfirmPeaceNotify;

            /**
             * Encodes the specified ConfirmPeaceNotify message. Does not implicitly {@link Game.Fivestone.ConfirmPeaceNotify.verify|verify} messages.
             * @param message ConfirmPeaceNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IConfirmPeaceNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ConfirmPeaceNotify message, length delimited. Does not implicitly {@link Game.Fivestone.ConfirmPeaceNotify.verify|verify} messages.
             * @param message ConfirmPeaceNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IConfirmPeaceNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ConfirmPeaceNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConfirmPeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.ConfirmPeaceNotify;

            /**
             * Decodes a ConfirmPeaceNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConfirmPeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.ConfirmPeaceNotify;

            /**
             * Verifies a ConfirmPeaceNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LinksNotify. */
        interface ILinksNotify {

            /** LinksNotify start_x */
            start_x?: (number|null);

            /** LinksNotify start_y */
            start_y?: (number|null);

            /** LinksNotify end_x */
            end_x?: (number|null);

            /** LinksNotify end_y */
            end_y?: (number|null);
        }

        /** Represents a LinksNotify. */
        class LinksNotify implements ILinksNotify {

            /**
             * Constructs a new LinksNotify.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.ILinksNotify);

            /** LinksNotify start_x. */
            public start_x: number;

            /** LinksNotify start_y. */
            public start_y: number;

            /** LinksNotify end_x. */
            public end_x: number;

            /** LinksNotify end_y. */
            public end_y: number;

            /**
             * Creates a new LinksNotify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LinksNotify instance
             */
            public static create(properties?: Game.Fivestone.ILinksNotify): Game.Fivestone.LinksNotify;

            /**
             * Encodes the specified LinksNotify message. Does not implicitly {@link Game.Fivestone.LinksNotify.verify|verify} messages.
             * @param message LinksNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.ILinksNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified LinksNotify message, length delimited. Does not implicitly {@link Game.Fivestone.LinksNotify.verify|verify} messages.
             * @param message LinksNotify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.ILinksNotify, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a LinksNotify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LinksNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.LinksNotify;

            /**
             * Decodes a LinksNotify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LinksNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.LinksNotify;

            /**
             * Verifies a LinksNotify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Chess. */
        interface IChess {

            /** Chess value */
            value?: (number|null);

            /** Chess x */
            x?: (number|null);

            /** Chess y */
            y?: (number|null);
        }

        /** Represents a Chess. */
        class Chess implements IChess {

            /**
             * Constructs a new Chess.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.Fivestone.IChess);

            /** Chess value. */
            public value: number;

            /** Chess x. */
            public x: number;

            /** Chess y. */
            public y: number;

            /**
             * Creates a new Chess instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Chess instance
             */
            public static create(properties?: Game.Fivestone.IChess): Game.Fivestone.Chess;

            /**
             * Encodes the specified Chess message. Does not implicitly {@link Game.Fivestone.Chess.verify|verify} messages.
             * @param message Chess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.Fivestone.IChess, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified Chess message, length delimited. Does not implicitly {@link Game.Fivestone.Chess.verify|verify} messages.
             * @param message Chess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.Fivestone.IChess, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Chess message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Chess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.Fivestone.Chess;

            /**
             * Decodes a Chess message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Chess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.Fivestone.Chess;

            /**
             * Verifies a Chess message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Namespace H5. */
    namespace H5 {

        /** ErrorCode enum. */
        enum ErrorCode {
            Success = 0,
            Failed = 1
        }

        /** Properties of a Message. */
        interface IMessage {

            /** Message msgId */
            msgId?: (number|null);

            /** Message data */
            data?: (Uint8Array|null);

            /** Message error_info */
            error_info?: (Game.H5.IErrorInfo|null);

            /** Message timestamp */
            timestamp?: (number|Long|null);

            /** Message field */
            field?: (string|null);
        }

        /** Represents a Message. */
        class Message implements IMessage {

            /**
             * Constructs a new Message.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.H5.IMessage);

            /** Message msgId. */
            public msgId: number;

            /** Message data. */
            public data: Uint8Array;

            /** Message error_info. */
            public error_info?: (Game.H5.IErrorInfo|null);

            /** Message timestamp. */
            public timestamp: (number|Long);

            /** Message field. */
            public field: string;

            /**
             * Creates a new Message instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Message instance
             */
            public static create(properties?: Game.H5.IMessage): Game.H5.Message;

            /**
             * Encodes the specified Message message. Does not implicitly {@link Game.H5.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.H5.IMessage, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link Game.H5.Message.verify|verify} messages.
             * @param message Message message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.H5.IMessage, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.H5.Message;

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.H5.Message;

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ErrorInfo. */
        interface IErrorInfo {

            /** ErrorInfo error_code */
            error_code?: (Game.H5.ErrorCode|null);

            /** ErrorInfo error_msg */
            error_msg?: (string|null);
        }

        /** Represents an ErrorInfo. */
        class ErrorInfo implements IErrorInfo {

            /**
             * Constructs a new ErrorInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Game.H5.IErrorInfo);

            /** ErrorInfo error_code. */
            public error_code: Game.H5.ErrorCode;

            /** ErrorInfo error_msg. */
            public error_msg: string;

            /**
             * Creates a new ErrorInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorInfo instance
             */
            public static create(properties?: Game.H5.IErrorInfo): Game.H5.ErrorInfo;

            /**
             * Encodes the specified ErrorInfo message. Does not implicitly {@link Game.H5.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Game.H5.IErrorInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link Game.H5.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Game.H5.IErrorInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Game.H5.ErrorInfo;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Game.H5.ErrorInfo;

            /**
             * Verifies an ErrorInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }
}
