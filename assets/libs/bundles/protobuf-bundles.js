var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Game = (function() {

    /**
     * Namespace Game.
     * @exports Game
     * @namespace
     */
    var Game = {};

    Game.Common = (function() {

        /**
         * Namespace Common.
         * @memberof Game
         * @namespace
         */
        var Common = {};

        /**
         * MsgId enum.
         * @name Game.Common.MsgId
         * @enum {number}
         * @property {number} Login_Request=1 Login_Request value
         * @property {number} Login_Response=2 Login_Response value
         * @property {number} RoomMember_Notify=3 RoomMember_Notify value
         * @property {number} SetReady_Request=4 SetReady_Request value
         * @property {number} SetReady_Response=5 SetReady_Response value
         * @property {number} GameStart_Notify=6 GameStart_Notify value
         * @property {number} GameOver_Notify=7 GameOver_Notify value
         * @property {number} Exit_Request=8 Exit_Request value
         * @property {number} Exit_Response=9 Exit_Response value
         * @property {number} Exit_Notify=10 Exit_Notify value
         * @property {number} GameSettle_Notify=11 GameSettle_Notify value
         */
        Common.MsgId = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "Login_Request"] = 1;
            values[valuesById[2] = "Login_Response"] = 2;
            values[valuesById[3] = "RoomMember_Notify"] = 3;
            values[valuesById[4] = "SetReady_Request"] = 4;
            values[valuesById[5] = "SetReady_Response"] = 5;
            values[valuesById[6] = "GameStart_Notify"] = 6;
            values[valuesById[7] = "GameOver_Notify"] = 7;
            values[valuesById[8] = "Exit_Request"] = 8;
            values[valuesById[9] = "Exit_Response"] = 9;
            values[valuesById[10] = "Exit_Notify"] = 10;
            values[valuesById[11] = "GameSettle_Notify"] = 11;
            return values;
        })();

        Common.LoginRequest = (function() {

            /**
             * Properties of a LoginRequest.
             * @memberof Game.Common
             * @interface ILoginRequest
             * @property {Game.Common.IUserInfo|null} [user] LoginRequest user
             * @property {string|null} [channel] LoginRequest channel
             * @property {number|null} [time] LoginRequest time
             * @property {string|null} [sign] LoginRequest sign
             */

            /**
             * Constructs a new LoginRequest.
             * @memberof Game.Common
             * @classdesc Represents a LoginRequest.
             * @implements ILoginRequest
             * @constructor
             * @param {Game.Common.ILoginRequest=} [properties] Properties to set
             */
            function LoginRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginRequest user.
             * @member {Game.Common.IUserInfo|null|undefined} user
             * @memberof Game.Common.LoginRequest
             * @instance
             */
            LoginRequest.prototype.user = null;

            /**
             * LoginRequest channel.
             * @member {string} channel
             * @memberof Game.Common.LoginRequest
             * @instance
             */
            LoginRequest.prototype.channel = "";

            /**
             * LoginRequest time.
             * @member {number} time
             * @memberof Game.Common.LoginRequest
             * @instance
             */
            LoginRequest.prototype.time = 0;

            /**
             * LoginRequest sign.
             * @member {string} sign
             * @memberof Game.Common.LoginRequest
             * @instance
             */
            LoginRequest.prototype.sign = "";

            /**
             * Creates a new LoginRequest instance using the specified properties.
             * @function create
             * @memberof Game.Common.LoginRequest
             * @static
             * @param {Game.Common.ILoginRequest=} [properties] Properties to set
             * @returns {Game.Common.LoginRequest} LoginRequest instance
             */
            LoginRequest.create = function create(properties) {
                return new LoginRequest(properties);
            };

            /**
             * Encodes the specified LoginRequest message. Does not implicitly {@link Game.Common.LoginRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.LoginRequest
             * @static
             * @param {Game.Common.ILoginRequest} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.Game.Common.UserInfo.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.channel);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.time);
                if (message.sign != null && Object.hasOwnProperty.call(message, "sign"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.sign);
                return writer;
            };

            /**
             * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link Game.Common.LoginRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.LoginRequest
             * @static
             * @param {Game.Common.ILoginRequest} message LoginRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.LoginRequest} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.LoginRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = $root.Game.Common.UserInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.channel = reader.string();
                        break;
                    case 4:
                        message.time = reader.int32();
                        break;
                    case 5:
                        message.sign = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.LoginRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.LoginRequest} LoginRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginRequest message.
             * @function verify
             * @memberof Game.Common.LoginRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.Game.Common.UserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                if (message.sign != null && message.hasOwnProperty("sign"))
                    if (!$util.isString(message.sign))
                        return "sign: string expected";
                return null;
            };

            return LoginRequest;
        })();

        Common.LoginResponse = (function() {

            /**
             * Properties of a LoginResponse.
             * @memberof Game.Common
             * @interface ILoginResponse
             * @property {number|null} [status] LoginResponse status
             * @property {string|null} [msg] LoginResponse msg
             * @property {Game.Common.IRoomInfo|null} [room] LoginResponse room
             * @property {Array.<Game.Common.IMemberInfo>|null} [members] LoginResponse members
             */

            /**
             * Constructs a new LoginResponse.
             * @memberof Game.Common
             * @classdesc Represents a LoginResponse.
             * @implements ILoginResponse
             * @constructor
             * @param {Game.Common.ILoginResponse=} [properties] Properties to set
             */
            function LoginResponse(properties) {
                this.members = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginResponse status.
             * @member {number} status
             * @memberof Game.Common.LoginResponse
             * @instance
             */
            LoginResponse.prototype.status = 0;

            /**
             * LoginResponse msg.
             * @member {string} msg
             * @memberof Game.Common.LoginResponse
             * @instance
             */
            LoginResponse.prototype.msg = "";

            /**
             * LoginResponse room.
             * @member {Game.Common.IRoomInfo|null|undefined} room
             * @memberof Game.Common.LoginResponse
             * @instance
             */
            LoginResponse.prototype.room = null;

            /**
             * LoginResponse members.
             * @member {Array.<Game.Common.IMemberInfo>} members
             * @memberof Game.Common.LoginResponse
             * @instance
             */
            LoginResponse.prototype.members = $util.emptyArray;

            /**
             * Creates a new LoginResponse instance using the specified properties.
             * @function create
             * @memberof Game.Common.LoginResponse
             * @static
             * @param {Game.Common.ILoginResponse=} [properties] Properties to set
             * @returns {Game.Common.LoginResponse} LoginResponse instance
             */
            LoginResponse.create = function create(properties) {
                return new LoginResponse(properties);
            };

            /**
             * Encodes the specified LoginResponse message. Does not implicitly {@link Game.Common.LoginResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.LoginResponse
             * @static
             * @param {Game.Common.ILoginResponse} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                    $root.Game.Common.RoomInfo.encode(message.room, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.members != null && message.members.length)
                    for (var i = 0; i < message.members.length; ++i)
                        $root.Game.Common.MemberInfo.encode(message.members[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link Game.Common.LoginResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.LoginResponse
             * @static
             * @param {Game.Common.ILoginResponse} message LoginResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.LoginResponse} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.LoginResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    case 3:
                        message.room = $root.Game.Common.RoomInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push($root.Game.Common.MemberInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.LoginResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.LoginResponse} LoginResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginResponse message.
             * @function verify
             * @memberof Game.Common.LoginResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.room != null && message.hasOwnProperty("room")) {
                    var error = $root.Game.Common.RoomInfo.verify(message.room);
                    if (error)
                        return "room." + error;
                }
                if (message.members != null && message.hasOwnProperty("members")) {
                    if (!Array.isArray(message.members))
                        return "members: array expected";
                    for (var i = 0; i < message.members.length; ++i) {
                        var error = $root.Game.Common.MemberInfo.verify(message.members[i]);
                        if (error)
                            return "members." + error;
                    }
                }
                return null;
            };

            return LoginResponse;
        })();

        Common.RoomMemberNotify = (function() {

            /**
             * Properties of a RoomMemberNotify.
             * @memberof Game.Common
             * @interface IRoomMemberNotify
             * @property {Array.<Game.Common.IMemberInfo>|null} [members] RoomMemberNotify members
             */

            /**
             * Constructs a new RoomMemberNotify.
             * @memberof Game.Common
             * @classdesc Represents a RoomMemberNotify.
             * @implements IRoomMemberNotify
             * @constructor
             * @param {Game.Common.IRoomMemberNotify=} [properties] Properties to set
             */
            function RoomMemberNotify(properties) {
                this.members = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoomMemberNotify members.
             * @member {Array.<Game.Common.IMemberInfo>} members
             * @memberof Game.Common.RoomMemberNotify
             * @instance
             */
            RoomMemberNotify.prototype.members = $util.emptyArray;

            /**
             * Creates a new RoomMemberNotify instance using the specified properties.
             * @function create
             * @memberof Game.Common.RoomMemberNotify
             * @static
             * @param {Game.Common.IRoomMemberNotify=} [properties] Properties to set
             * @returns {Game.Common.RoomMemberNotify} RoomMemberNotify instance
             */
            RoomMemberNotify.create = function create(properties) {
                return new RoomMemberNotify(properties);
            };

            /**
             * Encodes the specified RoomMemberNotify message. Does not implicitly {@link Game.Common.RoomMemberNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.RoomMemberNotify
             * @static
             * @param {Game.Common.IRoomMemberNotify} message RoomMemberNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomMemberNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.members != null && message.members.length)
                    for (var i = 0; i < message.members.length; ++i)
                        $root.Game.Common.MemberInfo.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RoomMemberNotify message, length delimited. Does not implicitly {@link Game.Common.RoomMemberNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.RoomMemberNotify
             * @static
             * @param {Game.Common.IRoomMemberNotify} message RoomMemberNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomMemberNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomMemberNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.RoomMemberNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.RoomMemberNotify} RoomMemberNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomMemberNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.RoomMemberNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push($root.Game.Common.MemberInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RoomMemberNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.RoomMemberNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.RoomMemberNotify} RoomMemberNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomMemberNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoomMemberNotify message.
             * @function verify
             * @memberof Game.Common.RoomMemberNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomMemberNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.members != null && message.hasOwnProperty("members")) {
                    if (!Array.isArray(message.members))
                        return "members: array expected";
                    for (var i = 0; i < message.members.length; ++i) {
                        var error = $root.Game.Common.MemberInfo.verify(message.members[i]);
                        if (error)
                            return "members." + error;
                    }
                }
                return null;
            };

            return RoomMemberNotify;
        })();

        Common.SetReadyRequest = (function() {

            /**
             * Properties of a SetReadyRequest.
             * @memberof Game.Common
             * @interface ISetReadyRequest
             * @property {boolean|null} [is_ready] SetReadyRequest is_ready
             */

            /**
             * Constructs a new SetReadyRequest.
             * @memberof Game.Common
             * @classdesc Represents a SetReadyRequest.
             * @implements ISetReadyRequest
             * @constructor
             * @param {Game.Common.ISetReadyRequest=} [properties] Properties to set
             */
            function SetReadyRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetReadyRequest is_ready.
             * @member {boolean} is_ready
             * @memberof Game.Common.SetReadyRequest
             * @instance
             */
            SetReadyRequest.prototype.is_ready = false;

            /**
             * Creates a new SetReadyRequest instance using the specified properties.
             * @function create
             * @memberof Game.Common.SetReadyRequest
             * @static
             * @param {Game.Common.ISetReadyRequest=} [properties] Properties to set
             * @returns {Game.Common.SetReadyRequest} SetReadyRequest instance
             */
            SetReadyRequest.create = function create(properties) {
                return new SetReadyRequest(properties);
            };

            /**
             * Encodes the specified SetReadyRequest message. Does not implicitly {@link Game.Common.SetReadyRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.SetReadyRequest
             * @static
             * @param {Game.Common.ISetReadyRequest} message SetReadyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetReadyRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.is_ready != null && Object.hasOwnProperty.call(message, "is_ready"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.is_ready);
                return writer;
            };

            /**
             * Encodes the specified SetReadyRequest message, length delimited. Does not implicitly {@link Game.Common.SetReadyRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.SetReadyRequest
             * @static
             * @param {Game.Common.ISetReadyRequest} message SetReadyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetReadyRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.SetReadyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.SetReadyRequest} SetReadyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetReadyRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.SetReadyRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.is_ready = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SetReadyRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.SetReadyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.SetReadyRequest} SetReadyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetReadyRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetReadyRequest message.
             * @function verify
             * @memberof Game.Common.SetReadyRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetReadyRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.is_ready != null && message.hasOwnProperty("is_ready"))
                    if (typeof message.is_ready !== "boolean")
                        return "is_ready: boolean expected";
                return null;
            };

            return SetReadyRequest;
        })();

        Common.SetReadyResponse = (function() {

            /**
             * Properties of a SetReadyResponse.
             * @memberof Game.Common
             * @interface ISetReadyResponse
             * @property {number|null} [status] SetReadyResponse status
             * @property {string|null} [msg] SetReadyResponse msg
             */

            /**
             * Constructs a new SetReadyResponse.
             * @memberof Game.Common
             * @classdesc Represents a SetReadyResponse.
             * @implements ISetReadyResponse
             * @constructor
             * @param {Game.Common.ISetReadyResponse=} [properties] Properties to set
             */
            function SetReadyResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetReadyResponse status.
             * @member {number} status
             * @memberof Game.Common.SetReadyResponse
             * @instance
             */
            SetReadyResponse.prototype.status = 0;

            /**
             * SetReadyResponse msg.
             * @member {string} msg
             * @memberof Game.Common.SetReadyResponse
             * @instance
             */
            SetReadyResponse.prototype.msg = "";

            /**
             * Creates a new SetReadyResponse instance using the specified properties.
             * @function create
             * @memberof Game.Common.SetReadyResponse
             * @static
             * @param {Game.Common.ISetReadyResponse=} [properties] Properties to set
             * @returns {Game.Common.SetReadyResponse} SetReadyResponse instance
             */
            SetReadyResponse.create = function create(properties) {
                return new SetReadyResponse(properties);
            };

            /**
             * Encodes the specified SetReadyResponse message. Does not implicitly {@link Game.Common.SetReadyResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.SetReadyResponse
             * @static
             * @param {Game.Common.ISetReadyResponse} message SetReadyResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetReadyResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified SetReadyResponse message, length delimited. Does not implicitly {@link Game.Common.SetReadyResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.SetReadyResponse
             * @static
             * @param {Game.Common.ISetReadyResponse} message SetReadyResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SetReadyResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.SetReadyResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.SetReadyResponse} SetReadyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetReadyResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.SetReadyResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SetReadyResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.SetReadyResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.SetReadyResponse} SetReadyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetReadyResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetReadyResponse message.
             * @function verify
             * @memberof Game.Common.SetReadyResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetReadyResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            return SetReadyResponse;
        })();

        Common.GameStartNotify = (function() {

            /**
             * Properties of a GameStartNotify.
             * @memberof Game.Common
             * @interface IGameStartNotify
             */

            /**
             * Constructs a new GameStartNotify.
             * @memberof Game.Common
             * @classdesc Represents a GameStartNotify.
             * @implements IGameStartNotify
             * @constructor
             * @param {Game.Common.IGameStartNotify=} [properties] Properties to set
             */
            function GameStartNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GameStartNotify instance using the specified properties.
             * @function create
             * @memberof Game.Common.GameStartNotify
             * @static
             * @param {Game.Common.IGameStartNotify=} [properties] Properties to set
             * @returns {Game.Common.GameStartNotify} GameStartNotify instance
             */
            GameStartNotify.create = function create(properties) {
                return new GameStartNotify(properties);
            };

            /**
             * Encodes the specified GameStartNotify message. Does not implicitly {@link Game.Common.GameStartNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.GameStartNotify
             * @static
             * @param {Game.Common.IGameStartNotify} message GameStartNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStartNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GameStartNotify message, length delimited. Does not implicitly {@link Game.Common.GameStartNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.GameStartNotify
             * @static
             * @param {Game.Common.IGameStartNotify} message GameStartNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameStartNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameStartNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.GameStartNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.GameStartNotify} GameStartNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStartNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.GameStartNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameStartNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.GameStartNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.GameStartNotify} GameStartNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameStartNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameStartNotify message.
             * @function verify
             * @memberof Game.Common.GameStartNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameStartNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return GameStartNotify;
        })();

        Common.GameOverNotify = (function() {

            /**
             * Properties of a GameOverNotify.
             * @memberof Game.Common
             * @interface IGameOverNotify
             */

            /**
             * Constructs a new GameOverNotify.
             * @memberof Game.Common
             * @classdesc Represents a GameOverNotify.
             * @implements IGameOverNotify
             * @constructor
             * @param {Game.Common.IGameOverNotify=} [properties] Properties to set
             */
            function GameOverNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GameOverNotify instance using the specified properties.
             * @function create
             * @memberof Game.Common.GameOverNotify
             * @static
             * @param {Game.Common.IGameOverNotify=} [properties] Properties to set
             * @returns {Game.Common.GameOverNotify} GameOverNotify instance
             */
            GameOverNotify.create = function create(properties) {
                return new GameOverNotify(properties);
            };

            /**
             * Encodes the specified GameOverNotify message. Does not implicitly {@link Game.Common.GameOverNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.GameOverNotify
             * @static
             * @param {Game.Common.IGameOverNotify} message GameOverNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameOverNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GameOverNotify message, length delimited. Does not implicitly {@link Game.Common.GameOverNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.GameOverNotify
             * @static
             * @param {Game.Common.IGameOverNotify} message GameOverNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameOverNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameOverNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.GameOverNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.GameOverNotify} GameOverNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameOverNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.GameOverNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameOverNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.GameOverNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.GameOverNotify} GameOverNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameOverNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameOverNotify message.
             * @function verify
             * @memberof Game.Common.GameOverNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameOverNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return GameOverNotify;
        })();

        Common.ExitRequest = (function() {

            /**
             * Properties of an ExitRequest.
             * @memberof Game.Common
             * @interface IExitRequest
             */

            /**
             * Constructs a new ExitRequest.
             * @memberof Game.Common
             * @classdesc Represents an ExitRequest.
             * @implements IExitRequest
             * @constructor
             * @param {Game.Common.IExitRequest=} [properties] Properties to set
             */
            function ExitRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ExitRequest instance using the specified properties.
             * @function create
             * @memberof Game.Common.ExitRequest
             * @static
             * @param {Game.Common.IExitRequest=} [properties] Properties to set
             * @returns {Game.Common.ExitRequest} ExitRequest instance
             */
            ExitRequest.create = function create(properties) {
                return new ExitRequest(properties);
            };

            /**
             * Encodes the specified ExitRequest message. Does not implicitly {@link Game.Common.ExitRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.ExitRequest
             * @static
             * @param {Game.Common.IExitRequest} message ExitRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExitRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ExitRequest message, length delimited. Does not implicitly {@link Game.Common.ExitRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.ExitRequest
             * @static
             * @param {Game.Common.IExitRequest} message ExitRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExitRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExitRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.ExitRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.ExitRequest} ExitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExitRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.ExitRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExitRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.ExitRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.ExitRequest} ExitRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExitRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExitRequest message.
             * @function verify
             * @memberof Game.Common.ExitRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExitRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return ExitRequest;
        })();

        Common.ExitResponse = (function() {

            /**
             * Properties of an ExitResponse.
             * @memberof Game.Common
             * @interface IExitResponse
             * @property {number|null} [status] ExitResponse status
             * @property {string|null} [msg] ExitResponse msg
             */

            /**
             * Constructs a new ExitResponse.
             * @memberof Game.Common
             * @classdesc Represents an ExitResponse.
             * @implements IExitResponse
             * @constructor
             * @param {Game.Common.IExitResponse=} [properties] Properties to set
             */
            function ExitResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExitResponse status.
             * @member {number} status
             * @memberof Game.Common.ExitResponse
             * @instance
             */
            ExitResponse.prototype.status = 0;

            /**
             * ExitResponse msg.
             * @member {string} msg
             * @memberof Game.Common.ExitResponse
             * @instance
             */
            ExitResponse.prototype.msg = "";

            /**
             * Creates a new ExitResponse instance using the specified properties.
             * @function create
             * @memberof Game.Common.ExitResponse
             * @static
             * @param {Game.Common.IExitResponse=} [properties] Properties to set
             * @returns {Game.Common.ExitResponse} ExitResponse instance
             */
            ExitResponse.create = function create(properties) {
                return new ExitResponse(properties);
            };

            /**
             * Encodes the specified ExitResponse message. Does not implicitly {@link Game.Common.ExitResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.ExitResponse
             * @static
             * @param {Game.Common.IExitResponse} message ExitResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExitResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified ExitResponse message, length delimited. Does not implicitly {@link Game.Common.ExitResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.ExitResponse
             * @static
             * @param {Game.Common.IExitResponse} message ExitResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExitResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExitResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.ExitResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.ExitResponse} ExitResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExitResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.ExitResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExitResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.ExitResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.ExitResponse} ExitResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExitResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExitResponse message.
             * @function verify
             * @memberof Game.Common.ExitResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExitResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            return ExitResponse;
        })();

        Common.ExitNotify = (function() {

            /**
             * Properties of an ExitNotify.
             * @memberof Game.Common
             * @interface IExitNotify
             * @property {string|null} [uid] ExitNotify uid
             */

            /**
             * Constructs a new ExitNotify.
             * @memberof Game.Common
             * @classdesc Represents an ExitNotify.
             * @implements IExitNotify
             * @constructor
             * @param {Game.Common.IExitNotify=} [properties] Properties to set
             */
            function ExitNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExitNotify uid.
             * @member {string} uid
             * @memberof Game.Common.ExitNotify
             * @instance
             */
            ExitNotify.prototype.uid = "";

            /**
             * Creates a new ExitNotify instance using the specified properties.
             * @function create
             * @memberof Game.Common.ExitNotify
             * @static
             * @param {Game.Common.IExitNotify=} [properties] Properties to set
             * @returns {Game.Common.ExitNotify} ExitNotify instance
             */
            ExitNotify.create = function create(properties) {
                return new ExitNotify(properties);
            };

            /**
             * Encodes the specified ExitNotify message. Does not implicitly {@link Game.Common.ExitNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.ExitNotify
             * @static
             * @param {Game.Common.IExitNotify} message ExitNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExitNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified ExitNotify message, length delimited. Does not implicitly {@link Game.Common.ExitNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.ExitNotify
             * @static
             * @param {Game.Common.IExitNotify} message ExitNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExitNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExitNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.ExitNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.ExitNotify} ExitNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExitNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.ExitNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExitNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.ExitNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.ExitNotify} ExitNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExitNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExitNotify message.
             * @function verify
             * @memberof Game.Common.ExitNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExitNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            return ExitNotify;
        })();

        Common.GameSettleNotify = (function() {

            /**
             * Properties of a GameSettleNotify.
             * @memberof Game.Common
             * @interface IGameSettleNotify
             * @property {Array.<Game.Common.IRankInfo>|null} [ranks] GameSettleNotify ranks
             * @property {Game.Common.IRankInfo|null} [mine] GameSettleNotify mine
             */

            /**
             * Constructs a new GameSettleNotify.
             * @memberof Game.Common
             * @classdesc Represents a GameSettleNotify.
             * @implements IGameSettleNotify
             * @constructor
             * @param {Game.Common.IGameSettleNotify=} [properties] Properties to set
             */
            function GameSettleNotify(properties) {
                this.ranks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GameSettleNotify ranks.
             * @member {Array.<Game.Common.IRankInfo>} ranks
             * @memberof Game.Common.GameSettleNotify
             * @instance
             */
            GameSettleNotify.prototype.ranks = $util.emptyArray;

            /**
             * GameSettleNotify mine.
             * @member {Game.Common.IRankInfo|null|undefined} mine
             * @memberof Game.Common.GameSettleNotify
             * @instance
             */
            GameSettleNotify.prototype.mine = null;

            /**
             * Creates a new GameSettleNotify instance using the specified properties.
             * @function create
             * @memberof Game.Common.GameSettleNotify
             * @static
             * @param {Game.Common.IGameSettleNotify=} [properties] Properties to set
             * @returns {Game.Common.GameSettleNotify} GameSettleNotify instance
             */
            GameSettleNotify.create = function create(properties) {
                return new GameSettleNotify(properties);
            };

            /**
             * Encodes the specified GameSettleNotify message. Does not implicitly {@link Game.Common.GameSettleNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.GameSettleNotify
             * @static
             * @param {Game.Common.IGameSettleNotify} message GameSettleNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameSettleNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ranks != null && message.ranks.length)
                    for (var i = 0; i < message.ranks.length; ++i)
                        $root.Game.Common.RankInfo.encode(message.ranks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.mine != null && Object.hasOwnProperty.call(message, "mine"))
                    $root.Game.Common.RankInfo.encode(message.mine, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GameSettleNotify message, length delimited. Does not implicitly {@link Game.Common.GameSettleNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.GameSettleNotify
             * @static
             * @param {Game.Common.IGameSettleNotify} message GameSettleNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameSettleNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GameSettleNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.GameSettleNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.GameSettleNotify} GameSettleNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameSettleNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.GameSettleNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.ranks && message.ranks.length))
                            message.ranks = [];
                        message.ranks.push($root.Game.Common.RankInfo.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.mine = $root.Game.Common.RankInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GameSettleNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.GameSettleNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.GameSettleNotify} GameSettleNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameSettleNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GameSettleNotify message.
             * @function verify
             * @memberof Game.Common.GameSettleNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameSettleNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ranks != null && message.hasOwnProperty("ranks")) {
                    if (!Array.isArray(message.ranks))
                        return "ranks: array expected";
                    for (var i = 0; i < message.ranks.length; ++i) {
                        var error = $root.Game.Common.RankInfo.verify(message.ranks[i]);
                        if (error)
                            return "ranks." + error;
                    }
                }
                if (message.mine != null && message.hasOwnProperty("mine")) {
                    var error = $root.Game.Common.RankInfo.verify(message.mine);
                    if (error)
                        return "mine." + error;
                }
                return null;
            };

            return GameSettleNotify;
        })();

        Common.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof Game.Common
             * @interface IUserInfo
             * @property {string|null} [uid] UserInfo uid
             * @property {string|null} [nick] UserInfo nick
             * @property {string|null} [avatar] UserInfo avatar
             * @property {number|null} [sex] UserInfo sex
             */

            /**
             * Constructs a new UserInfo.
             * @memberof Game.Common
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {Game.Common.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo uid.
             * @member {string} uid
             * @memberof Game.Common.UserInfo
             * @instance
             */
            UserInfo.prototype.uid = "";

            /**
             * UserInfo nick.
             * @member {string} nick
             * @memberof Game.Common.UserInfo
             * @instance
             */
            UserInfo.prototype.nick = "";

            /**
             * UserInfo avatar.
             * @member {string} avatar
             * @memberof Game.Common.UserInfo
             * @instance
             */
            UserInfo.prototype.avatar = "";

            /**
             * UserInfo sex.
             * @member {number} sex
             * @memberof Game.Common.UserInfo
             * @instance
             */
            UserInfo.prototype.sex = 0;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof Game.Common.UserInfo
             * @static
             * @param {Game.Common.IUserInfo=} [properties] Properties to set
             * @returns {Game.Common.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link Game.Common.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.UserInfo
             * @static
             * @param {Game.Common.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                if (message.nick != null && Object.hasOwnProperty.call(message, "nick"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nick);
                if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
                if (message.sex != null && Object.hasOwnProperty.call(message, "sex"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
                return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link Game.Common.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.UserInfo
             * @static
             * @param {Game.Common.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.UserInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    case 2:
                        message.nick = reader.string();
                        break;
                    case 3:
                        message.avatar = reader.string();
                        break;
                    case 4:
                        message.sex = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof Game.Common.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.nick != null && message.hasOwnProperty("nick"))
                    if (!$util.isString(message.nick))
                        return "nick: string expected";
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    if (!$util.isString(message.avatar))
                        return "avatar: string expected";
                if (message.sex != null && message.hasOwnProperty("sex"))
                    if (!$util.isInteger(message.sex))
                        return "sex: integer expected";
                return null;
            };

            return UserInfo;
        })();

        Common.RoomInfo = (function() {

            /**
             * Properties of a RoomInfo.
             * @memberof Game.Common
             * @interface IRoomInfo
             * @property {string|null} [room_id] RoomInfo room_id
             * @property {string|null} [owner_id] RoomInfo owner_id
             * @property {string|null} [owner_name] RoomInfo owner_name
             * @property {string|null} [choose] RoomInfo choose
             * @property {number|null} [size] RoomInfo size
             * @property {number|null} [people] RoomInfo people
             * @property {number|null} [status] RoomInfo status
             */

            /**
             * Constructs a new RoomInfo.
             * @memberof Game.Common
             * @classdesc Represents a RoomInfo.
             * @implements IRoomInfo
             * @constructor
             * @param {Game.Common.IRoomInfo=} [properties] Properties to set
             */
            function RoomInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoomInfo room_id.
             * @member {string} room_id
             * @memberof Game.Common.RoomInfo
             * @instance
             */
            RoomInfo.prototype.room_id = "";

            /**
             * RoomInfo owner_id.
             * @member {string} owner_id
             * @memberof Game.Common.RoomInfo
             * @instance
             */
            RoomInfo.prototype.owner_id = "";

            /**
             * RoomInfo owner_name.
             * @member {string} owner_name
             * @memberof Game.Common.RoomInfo
             * @instance
             */
            RoomInfo.prototype.owner_name = "";

            /**
             * RoomInfo choose.
             * @member {string} choose
             * @memberof Game.Common.RoomInfo
             * @instance
             */
            RoomInfo.prototype.choose = "";

            /**
             * RoomInfo size.
             * @member {number} size
             * @memberof Game.Common.RoomInfo
             * @instance
             */
            RoomInfo.prototype.size = 0;

            /**
             * RoomInfo people.
             * @member {number} people
             * @memberof Game.Common.RoomInfo
             * @instance
             */
            RoomInfo.prototype.people = 0;

            /**
             * RoomInfo status.
             * @member {number} status
             * @memberof Game.Common.RoomInfo
             * @instance
             */
            RoomInfo.prototype.status = 0;

            /**
             * Creates a new RoomInfo instance using the specified properties.
             * @function create
             * @memberof Game.Common.RoomInfo
             * @static
             * @param {Game.Common.IRoomInfo=} [properties] Properties to set
             * @returns {Game.Common.RoomInfo} RoomInfo instance
             */
            RoomInfo.create = function create(properties) {
                return new RoomInfo(properties);
            };

            /**
             * Encodes the specified RoomInfo message. Does not implicitly {@link Game.Common.RoomInfo.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.RoomInfo
             * @static
             * @param {Game.Common.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.room_id != null && Object.hasOwnProperty.call(message, "room_id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.room_id);
                if (message.owner_id != null && Object.hasOwnProperty.call(message, "owner_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner_id);
                if (message.owner_name != null && Object.hasOwnProperty.call(message, "owner_name"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.owner_name);
                if (message.choose != null && Object.hasOwnProperty.call(message, "choose"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.choose);
                if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.size);
                if (message.people != null && Object.hasOwnProperty.call(message, "people"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.people);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
                return writer;
            };

            /**
             * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link Game.Common.RoomInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.RoomInfo
             * @static
             * @param {Game.Common.IRoomInfo} message RoomInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoomInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.RoomInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.room_id = reader.string();
                        break;
                    case 2:
                        message.owner_id = reader.string();
                        break;
                    case 3:
                        message.owner_name = reader.string();
                        break;
                    case 4:
                        message.choose = reader.string();
                        break;
                    case 5:
                        message.size = reader.int32();
                        break;
                    case 6:
                        message.people = reader.int32();
                        break;
                    case 7:
                        message.status = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.RoomInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.RoomInfo} RoomInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoomInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoomInfo message.
             * @function verify
             * @memberof Game.Common.RoomInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoomInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.room_id != null && message.hasOwnProperty("room_id"))
                    if (!$util.isString(message.room_id))
                        return "room_id: string expected";
                if (message.owner_id != null && message.hasOwnProperty("owner_id"))
                    if (!$util.isString(message.owner_id))
                        return "owner_id: string expected";
                if (message.owner_name != null && message.hasOwnProperty("owner_name"))
                    if (!$util.isString(message.owner_name))
                        return "owner_name: string expected";
                if (message.choose != null && message.hasOwnProperty("choose"))
                    if (!$util.isString(message.choose))
                        return "choose: string expected";
                if (message.size != null && message.hasOwnProperty("size"))
                    if (!$util.isInteger(message.size))
                        return "size: integer expected";
                if (message.people != null && message.hasOwnProperty("people"))
                    if (!$util.isInteger(message.people))
                        return "people: integer expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                return null;
            };

            return RoomInfo;
        })();

        Common.MemberInfo = (function() {

            /**
             * Properties of a MemberInfo.
             * @memberof Game.Common
             * @interface IMemberInfo
             * @property {Game.Common.IUserInfo|null} [user] MemberInfo user
             * @property {number|null} [seat] MemberInfo seat
             * @property {boolean|null} [is_owner] MemberInfo is_owner
             * @property {boolean|null} [is_ready] MemberInfo is_ready
             * @property {boolean|null} [is_online] MemberInfo is_online
             */

            /**
             * Constructs a new MemberInfo.
             * @memberof Game.Common
             * @classdesc Represents a MemberInfo.
             * @implements IMemberInfo
             * @constructor
             * @param {Game.Common.IMemberInfo=} [properties] Properties to set
             */
            function MemberInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MemberInfo user.
             * @member {Game.Common.IUserInfo|null|undefined} user
             * @memberof Game.Common.MemberInfo
             * @instance
             */
            MemberInfo.prototype.user = null;

            /**
             * MemberInfo seat.
             * @member {number} seat
             * @memberof Game.Common.MemberInfo
             * @instance
             */
            MemberInfo.prototype.seat = 0;

            /**
             * MemberInfo is_owner.
             * @member {boolean} is_owner
             * @memberof Game.Common.MemberInfo
             * @instance
             */
            MemberInfo.prototype.is_owner = false;

            /**
             * MemberInfo is_ready.
             * @member {boolean} is_ready
             * @memberof Game.Common.MemberInfo
             * @instance
             */
            MemberInfo.prototype.is_ready = false;

            /**
             * MemberInfo is_online.
             * @member {boolean} is_online
             * @memberof Game.Common.MemberInfo
             * @instance
             */
            MemberInfo.prototype.is_online = false;

            /**
             * Creates a new MemberInfo instance using the specified properties.
             * @function create
             * @memberof Game.Common.MemberInfo
             * @static
             * @param {Game.Common.IMemberInfo=} [properties] Properties to set
             * @returns {Game.Common.MemberInfo} MemberInfo instance
             */
            MemberInfo.create = function create(properties) {
                return new MemberInfo(properties);
            };

            /**
             * Encodes the specified MemberInfo message. Does not implicitly {@link Game.Common.MemberInfo.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.MemberInfo
             * @static
             * @param {Game.Common.IMemberInfo} message MemberInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MemberInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.Game.Common.UserInfo.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.seat);
                if (message.is_owner != null && Object.hasOwnProperty.call(message, "is_owner"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_owner);
                if (message.is_ready != null && Object.hasOwnProperty.call(message, "is_ready"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.is_ready);
                if (message.is_online != null && Object.hasOwnProperty.call(message, "is_online"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_online);
                return writer;
            };

            /**
             * Encodes the specified MemberInfo message, length delimited. Does not implicitly {@link Game.Common.MemberInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.MemberInfo
             * @static
             * @param {Game.Common.IMemberInfo} message MemberInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MemberInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MemberInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.MemberInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.MemberInfo} MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MemberInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.MemberInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = $root.Game.Common.UserInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.seat = reader.int32();
                        break;
                    case 3:
                        message.is_owner = reader.bool();
                        break;
                    case 4:
                        message.is_ready = reader.bool();
                        break;
                    case 5:
                        message.is_online = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MemberInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.MemberInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.MemberInfo} MemberInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MemberInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MemberInfo message.
             * @function verify
             * @memberof Game.Common.MemberInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MemberInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.Game.Common.UserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.seat != null && message.hasOwnProperty("seat"))
                    if (!$util.isInteger(message.seat))
                        return "seat: integer expected";
                if (message.is_owner != null && message.hasOwnProperty("is_owner"))
                    if (typeof message.is_owner !== "boolean")
                        return "is_owner: boolean expected";
                if (message.is_ready != null && message.hasOwnProperty("is_ready"))
                    if (typeof message.is_ready !== "boolean")
                        return "is_ready: boolean expected";
                if (message.is_online != null && message.hasOwnProperty("is_online"))
                    if (typeof message.is_online !== "boolean")
                        return "is_online: boolean expected";
                return null;
            };

            return MemberInfo;
        })();

        Common.RankInfo = (function() {

            /**
             * Properties of a RankInfo.
             * @memberof Game.Common
             * @interface IRankInfo
             * @property {Game.Common.IUserInfo|null} [user] RankInfo user
             * @property {number|null} [rank] RankInfo rank
             * @property {number|null} [score] RankInfo score
             */

            /**
             * Constructs a new RankInfo.
             * @memberof Game.Common
             * @classdesc Represents a RankInfo.
             * @implements IRankInfo
             * @constructor
             * @param {Game.Common.IRankInfo=} [properties] Properties to set
             */
            function RankInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RankInfo user.
             * @member {Game.Common.IUserInfo|null|undefined} user
             * @memberof Game.Common.RankInfo
             * @instance
             */
            RankInfo.prototype.user = null;

            /**
             * RankInfo rank.
             * @member {number} rank
             * @memberof Game.Common.RankInfo
             * @instance
             */
            RankInfo.prototype.rank = 0;

            /**
             * RankInfo score.
             * @member {number} score
             * @memberof Game.Common.RankInfo
             * @instance
             */
            RankInfo.prototype.score = 0;

            /**
             * Creates a new RankInfo instance using the specified properties.
             * @function create
             * @memberof Game.Common.RankInfo
             * @static
             * @param {Game.Common.IRankInfo=} [properties] Properties to set
             * @returns {Game.Common.RankInfo} RankInfo instance
             */
            RankInfo.create = function create(properties) {
                return new RankInfo(properties);
            };

            /**
             * Encodes the specified RankInfo message. Does not implicitly {@link Game.Common.RankInfo.verify|verify} messages.
             * @function encode
             * @memberof Game.Common.RankInfo
             * @static
             * @param {Game.Common.IRankInfo} message RankInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.Game.Common.UserInfo.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
                if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
                return writer;
            };

            /**
             * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link Game.Common.RankInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Common.RankInfo
             * @static
             * @param {Game.Common.IRankInfo} message RankInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RankInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Common.RankInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Common.RankInfo} RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Common.RankInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = $root.Game.Common.UserInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.rank = reader.int32();
                        break;
                    case 3:
                        message.score = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RankInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Common.RankInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Common.RankInfo} RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RankInfo message.
             * @function verify
             * @memberof Game.Common.RankInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RankInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.Game.Common.UserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.rank != null && message.hasOwnProperty("rank"))
                    if (!$util.isInteger(message.rank))
                        return "rank: integer expected";
                if (message.score != null && message.hasOwnProperty("score"))
                    if (!$util.isInteger(message.score))
                        return "score: integer expected";
                return null;
            };

            return RankInfo;
        })();

        return Common;
    })();

    Game.Fivestone = (function() {

        /**
         * Namespace Fivestone.
         * @memberof Game
         * @namespace
         */
        var Fivestone = {};

        /**
         * MsgId enum.
         * @name Game.Fivestone.MsgId
         * @enum {number}
         * @property {number} ChessBoard_Request=10301 ChessBoard_Request value
         * @property {number} ChessBoard_Response=10302 ChessBoard_Response value
         * @property {number} Act_Request=10303 Act_Request value
         * @property {number} Act_Response=10304 Act_Response value
         * @property {number} Act_Notify=10305 Act_Notify value
         * @property {number} Round_Notify=10306 Round_Notify value
         * @property {number} GiveUp_Request=10307 GiveUp_Request value
         * @property {number} GiveUp_Response=10308 GiveUp_Response value
         * @property {number} GiveUp_Notify=10309 GiveUp_Notify value
         * @property {number} Peace_Request=10311 Peace_Request value
         * @property {number} Peace_Response=10312 Peace_Response value
         * @property {number} Peace_Notify=10313 Peace_Notify value
         * @property {number} AgreePeace_Request=10314 AgreePeace_Request value
         * @property {number} AgreePeace_Response=10315 AgreePeace_Response value
         * @property {number} AgreePeace_Notify=10316 AgreePeace_Notify value
         * @property {number} Links_Notify=10317 Links_Notify value
         * @property {number} Cancel_Request=10318 Cancel_Request value
         * @property {number} Cancel_Response=10319 Cancel_Response value
         * @property {number} Cancel_Notify=10320 Cancel_Notify value
         * @property {number} AgreeCancel_Request=10321 AgreeCancel_Request value
         * @property {number} AgreeCancel_Response=10322 AgreeCancel_Response value
         * @property {number} AgreeCancel_Notify=10323 AgreeCancel_Notify value
         */
        Fivestone.MsgId = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[10301] = "ChessBoard_Request"] = 10301;
            values[valuesById[10302] = "ChessBoard_Response"] = 10302;
            values[valuesById[10303] = "Act_Request"] = 10303;
            values[valuesById[10304] = "Act_Response"] = 10304;
            values[valuesById[10305] = "Act_Notify"] = 10305;
            values[valuesById[10306] = "Round_Notify"] = 10306;
            values[valuesById[10307] = "GiveUp_Request"] = 10307;
            values[valuesById[10308] = "GiveUp_Response"] = 10308;
            values[valuesById[10309] = "GiveUp_Notify"] = 10309;
            values[valuesById[10311] = "Peace_Request"] = 10311;
            values[valuesById[10312] = "Peace_Response"] = 10312;
            values[valuesById[10313] = "Peace_Notify"] = 10313;
            values[valuesById[10314] = "AgreePeace_Request"] = 10314;
            values[valuesById[10315] = "AgreePeace_Response"] = 10315;
            values[valuesById[10316] = "AgreePeace_Notify"] = 10316;
            values[valuesById[10317] = "Links_Notify"] = 10317;
            values[valuesById[10318] = "Cancel_Request"] = 10318;
            values[valuesById[10319] = "Cancel_Response"] = 10319;
            values[valuesById[10320] = "Cancel_Notify"] = 10320;
            values[valuesById[10321] = "AgreeCancel_Request"] = 10321;
            values[valuesById[10322] = "AgreeCancel_Response"] = 10322;
            values[valuesById[10323] = "AgreeCancel_Notify"] = 10323;
            return values;
        })();

        Fivestone.ChessBoardRequest = (function() {

            /**
             * Properties of a ChessBoardRequest.
             * @memberof Game.Fivestone
             * @interface IChessBoardRequest
             */

            /**
             * Constructs a new ChessBoardRequest.
             * @memberof Game.Fivestone
             * @classdesc Represents a ChessBoardRequest.
             * @implements IChessBoardRequest
             * @constructor
             * @param {Game.Fivestone.IChessBoardRequest=} [properties] Properties to set
             */
            function ChessBoardRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new ChessBoardRequest instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.ChessBoardRequest
             * @static
             * @param {Game.Fivestone.IChessBoardRequest=} [properties] Properties to set
             * @returns {Game.Fivestone.ChessBoardRequest} ChessBoardRequest instance
             */
            ChessBoardRequest.create = function create(properties) {
                return new ChessBoardRequest(properties);
            };

            /**
             * Encodes the specified ChessBoardRequest message. Does not implicitly {@link Game.Fivestone.ChessBoardRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.ChessBoardRequest
             * @static
             * @param {Game.Fivestone.IChessBoardRequest} message ChessBoardRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChessBoardRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified ChessBoardRequest message, length delimited. Does not implicitly {@link Game.Fivestone.ChessBoardRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.ChessBoardRequest
             * @static
             * @param {Game.Fivestone.IChessBoardRequest} message ChessBoardRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChessBoardRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChessBoardRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.ChessBoardRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.ChessBoardRequest} ChessBoardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChessBoardRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.ChessBoardRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChessBoardRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.ChessBoardRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.ChessBoardRequest} ChessBoardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChessBoardRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChessBoardRequest message.
             * @function verify
             * @memberof Game.Fivestone.ChessBoardRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChessBoardRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return ChessBoardRequest;
        })();

        Fivestone.ChessBoardResponse = (function() {

            /**
             * Properties of a ChessBoardResponse.
             * @memberof Game.Fivestone
             * @interface IChessBoardResponse
             * @property {number|null} [status] ChessBoardResponse status
             * @property {string|null} [msg] ChessBoardResponse msg
             * @property {Array.<string>|null} [ids] ChessBoardResponse ids
             * @property {Array.<number>|null} [cards] ChessBoardResponse cards
             * @property {string|null} [next] ChessBoardResponse next
             * @property {number|null} [time] ChessBoardResponse time
             */

            /**
             * Constructs a new ChessBoardResponse.
             * @memberof Game.Fivestone
             * @classdesc Represents a ChessBoardResponse.
             * @implements IChessBoardResponse
             * @constructor
             * @param {Game.Fivestone.IChessBoardResponse=} [properties] Properties to set
             */
            function ChessBoardResponse(properties) {
                this.ids = [];
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChessBoardResponse status.
             * @member {number} status
             * @memberof Game.Fivestone.ChessBoardResponse
             * @instance
             */
            ChessBoardResponse.prototype.status = 0;

            /**
             * ChessBoardResponse msg.
             * @member {string} msg
             * @memberof Game.Fivestone.ChessBoardResponse
             * @instance
             */
            ChessBoardResponse.prototype.msg = "";

            /**
             * ChessBoardResponse ids.
             * @member {Array.<string>} ids
             * @memberof Game.Fivestone.ChessBoardResponse
             * @instance
             */
            ChessBoardResponse.prototype.ids = $util.emptyArray;

            /**
             * ChessBoardResponse cards.
             * @member {Array.<number>} cards
             * @memberof Game.Fivestone.ChessBoardResponse
             * @instance
             */
            ChessBoardResponse.prototype.cards = $util.emptyArray;

            /**
             * ChessBoardResponse next.
             * @member {string} next
             * @memberof Game.Fivestone.ChessBoardResponse
             * @instance
             */
            ChessBoardResponse.prototype.next = "";

            /**
             * ChessBoardResponse time.
             * @member {number} time
             * @memberof Game.Fivestone.ChessBoardResponse
             * @instance
             */
            ChessBoardResponse.prototype.time = 0;

            /**
             * Creates a new ChessBoardResponse instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.ChessBoardResponse
             * @static
             * @param {Game.Fivestone.IChessBoardResponse=} [properties] Properties to set
             * @returns {Game.Fivestone.ChessBoardResponse} ChessBoardResponse instance
             */
            ChessBoardResponse.create = function create(properties) {
                return new ChessBoardResponse(properties);
            };

            /**
             * Encodes the specified ChessBoardResponse message. Does not implicitly {@link Game.Fivestone.ChessBoardResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.ChessBoardResponse
             * @static
             * @param {Game.Fivestone.IChessBoardResponse} message ChessBoardResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChessBoardResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                if (message.ids != null && message.ids.length)
                    for (var i = 0; i < message.ids.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.ids[i]);
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cards[i]);
                if (message.next != null && Object.hasOwnProperty.call(message, "next"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.next);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.time);
                return writer;
            };

            /**
             * Encodes the specified ChessBoardResponse message, length delimited. Does not implicitly {@link Game.Fivestone.ChessBoardResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.ChessBoardResponse
             * @static
             * @param {Game.Fivestone.IChessBoardResponse} message ChessBoardResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChessBoardResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChessBoardResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.ChessBoardResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.ChessBoardResponse} ChessBoardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChessBoardResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.ChessBoardResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    case 3:
                        if (!(message.ids && message.ids.length))
                            message.ids = [];
                        message.ids.push(reader.string());
                        break;
                    case 4:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    case 5:
                        message.next = reader.string();
                        break;
                    case 6:
                        message.time = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChessBoardResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.ChessBoardResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.ChessBoardResponse} ChessBoardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChessBoardResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChessBoardResponse message.
             * @function verify
             * @memberof Game.Fivestone.ChessBoardResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChessBoardResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.ids != null && message.hasOwnProperty("ids")) {
                    if (!Array.isArray(message.ids))
                        return "ids: array expected";
                    for (var i = 0; i < message.ids.length; ++i)
                        if (!$util.isString(message.ids[i]))
                            return "ids: string[] expected";
                }
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                if (message.next != null && message.hasOwnProperty("next"))
                    if (!$util.isString(message.next))
                        return "next: string expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                return null;
            };

            return ChessBoardResponse;
        })();

        Fivestone.ActRequest = (function() {

            /**
             * Properties of an ActRequest.
             * @memberof Game.Fivestone
             * @interface IActRequest
             * @property {number|null} [x] ActRequest x
             * @property {number|null} [y] ActRequest y
             */

            /**
             * Constructs a new ActRequest.
             * @memberof Game.Fivestone
             * @classdesc Represents an ActRequest.
             * @implements IActRequest
             * @constructor
             * @param {Game.Fivestone.IActRequest=} [properties] Properties to set
             */
            function ActRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ActRequest x.
             * @member {number} x
             * @memberof Game.Fivestone.ActRequest
             * @instance
             */
            ActRequest.prototype.x = 0;

            /**
             * ActRequest y.
             * @member {number} y
             * @memberof Game.Fivestone.ActRequest
             * @instance
             */
            ActRequest.prototype.y = 0;

            /**
             * Creates a new ActRequest instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.ActRequest
             * @static
             * @param {Game.Fivestone.IActRequest=} [properties] Properties to set
             * @returns {Game.Fivestone.ActRequest} ActRequest instance
             */
            ActRequest.create = function create(properties) {
                return new ActRequest(properties);
            };

            /**
             * Encodes the specified ActRequest message. Does not implicitly {@link Game.Fivestone.ActRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.ActRequest
             * @static
             * @param {Game.Fivestone.IActRequest} message ActRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
                if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
                return writer;
            };

            /**
             * Encodes the specified ActRequest message, length delimited. Does not implicitly {@link Game.Fivestone.ActRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.ActRequest
             * @static
             * @param {Game.Fivestone.IActRequest} message ActRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ActRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.ActRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.ActRequest} ActRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.ActRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.int32();
                        break;
                    case 2:
                        message.y = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ActRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.ActRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.ActRequest} ActRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ActRequest message.
             * @function verify
             * @memberof Game.Fivestone.ActRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ActRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x))
                        return "x: integer expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y))
                        return "y: integer expected";
                return null;
            };

            return ActRequest;
        })();

        Fivestone.ActResponse = (function() {

            /**
             * Properties of an ActResponse.
             * @memberof Game.Fivestone
             * @interface IActResponse
             * @property {number|null} [status] ActResponse status
             * @property {string|null} [msg] ActResponse msg
             * @property {Game.Fivestone.IChess|null} [card] ActResponse card
             */

            /**
             * Constructs a new ActResponse.
             * @memberof Game.Fivestone
             * @classdesc Represents an ActResponse.
             * @implements IActResponse
             * @constructor
             * @param {Game.Fivestone.IActResponse=} [properties] Properties to set
             */
            function ActResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ActResponse status.
             * @member {number} status
             * @memberof Game.Fivestone.ActResponse
             * @instance
             */
            ActResponse.prototype.status = 0;

            /**
             * ActResponse msg.
             * @member {string} msg
             * @memberof Game.Fivestone.ActResponse
             * @instance
             */
            ActResponse.prototype.msg = "";

            /**
             * ActResponse card.
             * @member {Game.Fivestone.IChess|null|undefined} card
             * @memberof Game.Fivestone.ActResponse
             * @instance
             */
            ActResponse.prototype.card = null;

            /**
             * Creates a new ActResponse instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.ActResponse
             * @static
             * @param {Game.Fivestone.IActResponse=} [properties] Properties to set
             * @returns {Game.Fivestone.ActResponse} ActResponse instance
             */
            ActResponse.create = function create(properties) {
                return new ActResponse(properties);
            };

            /**
             * Encodes the specified ActResponse message. Does not implicitly {@link Game.Fivestone.ActResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.ActResponse
             * @static
             * @param {Game.Fivestone.IActResponse} message ActResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                    $root.Game.Fivestone.Chess.encode(message.card, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ActResponse message, length delimited. Does not implicitly {@link Game.Fivestone.ActResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.ActResponse
             * @static
             * @param {Game.Fivestone.IActResponse} message ActResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ActResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.ActResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.ActResponse} ActResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.ActResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    case 3:
                        message.card = $root.Game.Fivestone.Chess.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ActResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.ActResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.ActResponse} ActResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ActResponse message.
             * @function verify
             * @memberof Game.Fivestone.ActResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ActResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.card != null && message.hasOwnProperty("card")) {
                    var error = $root.Game.Fivestone.Chess.verify(message.card);
                    if (error)
                        return "card." + error;
                }
                return null;
            };

            return ActResponse;
        })();

        Fivestone.ActNotify = (function() {

            /**
             * Properties of an ActNotify.
             * @memberof Game.Fivestone
             * @interface IActNotify
             * @property {string|null} [uid] ActNotify uid
             * @property {Game.Fivestone.IChess|null} [card] ActNotify card
             * @property {Array.<number>|null} [cards] ActNotify cards
             */

            /**
             * Constructs a new ActNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents an ActNotify.
             * @implements IActNotify
             * @constructor
             * @param {Game.Fivestone.IActNotify=} [properties] Properties to set
             */
            function ActNotify(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ActNotify uid.
             * @member {string} uid
             * @memberof Game.Fivestone.ActNotify
             * @instance
             */
            ActNotify.prototype.uid = "";

            /**
             * ActNotify card.
             * @member {Game.Fivestone.IChess|null|undefined} card
             * @memberof Game.Fivestone.ActNotify
             * @instance
             */
            ActNotify.prototype.card = null;

            /**
             * ActNotify cards.
             * @member {Array.<number>} cards
             * @memberof Game.Fivestone.ActNotify
             * @instance
             */
            ActNotify.prototype.cards = $util.emptyArray;

            /**
             * Creates a new ActNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.ActNotify
             * @static
             * @param {Game.Fivestone.IActNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.ActNotify} ActNotify instance
             */
            ActNotify.create = function create(properties) {
                return new ActNotify(properties);
            };

            /**
             * Encodes the specified ActNotify message. Does not implicitly {@link Game.Fivestone.ActNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.ActNotify
             * @static
             * @param {Game.Fivestone.IActNotify} message ActNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                    $root.Game.Fivestone.Chess.encode(message.card, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cards[i]);
                return writer;
            };

            /**
             * Encodes the specified ActNotify message, length delimited. Does not implicitly {@link Game.Fivestone.ActNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.ActNotify
             * @static
             * @param {Game.Fivestone.IActNotify} message ActNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ActNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ActNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.ActNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.ActNotify} ActNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.ActNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    case 2:
                        message.card = $root.Game.Fivestone.Chess.decode(reader, reader.uint32());
                        break;
                    case 3:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ActNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.ActNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.ActNotify} ActNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ActNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ActNotify message.
             * @function verify
             * @memberof Game.Fivestone.ActNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ActNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.card != null && message.hasOwnProperty("card")) {
                    var error = $root.Game.Fivestone.Chess.verify(message.card);
                    if (error)
                        return "card." + error;
                }
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };

            return ActNotify;
        })();

        Fivestone.RoundNotify = (function() {

            /**
             * Properties of a RoundNotify.
             * @memberof Game.Fivestone
             * @interface IRoundNotify
             * @property {string|null} [uid] RoundNotify uid
             * @property {number|null} [time] RoundNotify time
             */

            /**
             * Constructs a new RoundNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents a RoundNotify.
             * @implements IRoundNotify
             * @constructor
             * @param {Game.Fivestone.IRoundNotify=} [properties] Properties to set
             */
            function RoundNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoundNotify uid.
             * @member {string} uid
             * @memberof Game.Fivestone.RoundNotify
             * @instance
             */
            RoundNotify.prototype.uid = "";

            /**
             * RoundNotify time.
             * @member {number} time
             * @memberof Game.Fivestone.RoundNotify
             * @instance
             */
            RoundNotify.prototype.time = 0;

            /**
             * Creates a new RoundNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.RoundNotify
             * @static
             * @param {Game.Fivestone.IRoundNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.RoundNotify} RoundNotify instance
             */
            RoundNotify.create = function create(properties) {
                return new RoundNotify(properties);
            };

            /**
             * Encodes the specified RoundNotify message. Does not implicitly {@link Game.Fivestone.RoundNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.RoundNotify
             * @static
             * @param {Game.Fivestone.IRoundNotify} message RoundNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoundNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
                return writer;
            };

            /**
             * Encodes the specified RoundNotify message, length delimited. Does not implicitly {@link Game.Fivestone.RoundNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.RoundNotify
             * @static
             * @param {Game.Fivestone.IRoundNotify} message RoundNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoundNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoundNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.RoundNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.RoundNotify} RoundNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoundNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.RoundNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    case 2:
                        message.time = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RoundNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.RoundNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.RoundNotify} RoundNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoundNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoundNotify message.
             * @function verify
             * @memberof Game.Fivestone.RoundNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoundNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time))
                        return "time: integer expected";
                return null;
            };

            return RoundNotify;
        })();

        Fivestone.GiveUpRequest = (function() {

            /**
             * Properties of a GiveUpRequest.
             * @memberof Game.Fivestone
             * @interface IGiveUpRequest
             */

            /**
             * Constructs a new GiveUpRequest.
             * @memberof Game.Fivestone
             * @classdesc Represents a GiveUpRequest.
             * @implements IGiveUpRequest
             * @constructor
             * @param {Game.Fivestone.IGiveUpRequest=} [properties] Properties to set
             */
            function GiveUpRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new GiveUpRequest instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.GiveUpRequest
             * @static
             * @param {Game.Fivestone.IGiveUpRequest=} [properties] Properties to set
             * @returns {Game.Fivestone.GiveUpRequest} GiveUpRequest instance
             */
            GiveUpRequest.create = function create(properties) {
                return new GiveUpRequest(properties);
            };

            /**
             * Encodes the specified GiveUpRequest message. Does not implicitly {@link Game.Fivestone.GiveUpRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.GiveUpRequest
             * @static
             * @param {Game.Fivestone.IGiveUpRequest} message GiveUpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GiveUpRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified GiveUpRequest message, length delimited. Does not implicitly {@link Game.Fivestone.GiveUpRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.GiveUpRequest
             * @static
             * @param {Game.Fivestone.IGiveUpRequest} message GiveUpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GiveUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GiveUpRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.GiveUpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.GiveUpRequest} GiveUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GiveUpRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.GiveUpRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GiveUpRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.GiveUpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.GiveUpRequest} GiveUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GiveUpRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GiveUpRequest message.
             * @function verify
             * @memberof Game.Fivestone.GiveUpRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GiveUpRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return GiveUpRequest;
        })();

        Fivestone.GiveUpResponse = (function() {

            /**
             * Properties of a GiveUpResponse.
             * @memberof Game.Fivestone
             * @interface IGiveUpResponse
             * @property {number|null} [status] GiveUpResponse status
             * @property {string|null} [msg] GiveUpResponse msg
             */

            /**
             * Constructs a new GiveUpResponse.
             * @memberof Game.Fivestone
             * @classdesc Represents a GiveUpResponse.
             * @implements IGiveUpResponse
             * @constructor
             * @param {Game.Fivestone.IGiveUpResponse=} [properties] Properties to set
             */
            function GiveUpResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GiveUpResponse status.
             * @member {number} status
             * @memberof Game.Fivestone.GiveUpResponse
             * @instance
             */
            GiveUpResponse.prototype.status = 0;

            /**
             * GiveUpResponse msg.
             * @member {string} msg
             * @memberof Game.Fivestone.GiveUpResponse
             * @instance
             */
            GiveUpResponse.prototype.msg = "";

            /**
             * Creates a new GiveUpResponse instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.GiveUpResponse
             * @static
             * @param {Game.Fivestone.IGiveUpResponse=} [properties] Properties to set
             * @returns {Game.Fivestone.GiveUpResponse} GiveUpResponse instance
             */
            GiveUpResponse.create = function create(properties) {
                return new GiveUpResponse(properties);
            };

            /**
             * Encodes the specified GiveUpResponse message. Does not implicitly {@link Game.Fivestone.GiveUpResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.GiveUpResponse
             * @static
             * @param {Game.Fivestone.IGiveUpResponse} message GiveUpResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GiveUpResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified GiveUpResponse message, length delimited. Does not implicitly {@link Game.Fivestone.GiveUpResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.GiveUpResponse
             * @static
             * @param {Game.Fivestone.IGiveUpResponse} message GiveUpResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GiveUpResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GiveUpResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.GiveUpResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.GiveUpResponse} GiveUpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GiveUpResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.GiveUpResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GiveUpResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.GiveUpResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.GiveUpResponse} GiveUpResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GiveUpResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GiveUpResponse message.
             * @function verify
             * @memberof Game.Fivestone.GiveUpResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GiveUpResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            return GiveUpResponse;
        })();

        Fivestone.GiveUpNotify = (function() {

            /**
             * Properties of a GiveUpNotify.
             * @memberof Game.Fivestone
             * @interface IGiveUpNotify
             * @property {string|null} [uid] GiveUpNotify uid
             */

            /**
             * Constructs a new GiveUpNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents a GiveUpNotify.
             * @implements IGiveUpNotify
             * @constructor
             * @param {Game.Fivestone.IGiveUpNotify=} [properties] Properties to set
             */
            function GiveUpNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GiveUpNotify uid.
             * @member {string} uid
             * @memberof Game.Fivestone.GiveUpNotify
             * @instance
             */
            GiveUpNotify.prototype.uid = "";

            /**
             * Creates a new GiveUpNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.GiveUpNotify
             * @static
             * @param {Game.Fivestone.IGiveUpNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.GiveUpNotify} GiveUpNotify instance
             */
            GiveUpNotify.create = function create(properties) {
                return new GiveUpNotify(properties);
            };

            /**
             * Encodes the specified GiveUpNotify message. Does not implicitly {@link Game.Fivestone.GiveUpNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.GiveUpNotify
             * @static
             * @param {Game.Fivestone.IGiveUpNotify} message GiveUpNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GiveUpNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified GiveUpNotify message, length delimited. Does not implicitly {@link Game.Fivestone.GiveUpNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.GiveUpNotify
             * @static
             * @param {Game.Fivestone.IGiveUpNotify} message GiveUpNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GiveUpNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GiveUpNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.GiveUpNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.GiveUpNotify} GiveUpNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GiveUpNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.GiveUpNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GiveUpNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.GiveUpNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.GiveUpNotify} GiveUpNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GiveUpNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GiveUpNotify message.
             * @function verify
             * @memberof Game.Fivestone.GiveUpNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GiveUpNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            return GiveUpNotify;
        })();

        Fivestone.PeaceRequest = (function() {

            /**
             * Properties of a PeaceRequest.
             * @memberof Game.Fivestone
             * @interface IPeaceRequest
             */

            /**
             * Constructs a new PeaceRequest.
             * @memberof Game.Fivestone
             * @classdesc Represents a PeaceRequest.
             * @implements IPeaceRequest
             * @constructor
             * @param {Game.Fivestone.IPeaceRequest=} [properties] Properties to set
             */
            function PeaceRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new PeaceRequest instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.PeaceRequest
             * @static
             * @param {Game.Fivestone.IPeaceRequest=} [properties] Properties to set
             * @returns {Game.Fivestone.PeaceRequest} PeaceRequest instance
             */
            PeaceRequest.create = function create(properties) {
                return new PeaceRequest(properties);
            };

            /**
             * Encodes the specified PeaceRequest message. Does not implicitly {@link Game.Fivestone.PeaceRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.PeaceRequest
             * @static
             * @param {Game.Fivestone.IPeaceRequest} message PeaceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PeaceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified PeaceRequest message, length delimited. Does not implicitly {@link Game.Fivestone.PeaceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.PeaceRequest
             * @static
             * @param {Game.Fivestone.IPeaceRequest} message PeaceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PeaceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PeaceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.PeaceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.PeaceRequest} PeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PeaceRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.PeaceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PeaceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.PeaceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.PeaceRequest} PeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PeaceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PeaceRequest message.
             * @function verify
             * @memberof Game.Fivestone.PeaceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PeaceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return PeaceRequest;
        })();

        Fivestone.PeaceResponse = (function() {

            /**
             * Properties of a PeaceResponse.
             * @memberof Game.Fivestone
             * @interface IPeaceResponse
             * @property {number|null} [status] PeaceResponse status
             * @property {string|null} [msg] PeaceResponse msg
             */

            /**
             * Constructs a new PeaceResponse.
             * @memberof Game.Fivestone
             * @classdesc Represents a PeaceResponse.
             * @implements IPeaceResponse
             * @constructor
             * @param {Game.Fivestone.IPeaceResponse=} [properties] Properties to set
             */
            function PeaceResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PeaceResponse status.
             * @member {number} status
             * @memberof Game.Fivestone.PeaceResponse
             * @instance
             */
            PeaceResponse.prototype.status = 0;

            /**
             * PeaceResponse msg.
             * @member {string} msg
             * @memberof Game.Fivestone.PeaceResponse
             * @instance
             */
            PeaceResponse.prototype.msg = "";

            /**
             * Creates a new PeaceResponse instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.PeaceResponse
             * @static
             * @param {Game.Fivestone.IPeaceResponse=} [properties] Properties to set
             * @returns {Game.Fivestone.PeaceResponse} PeaceResponse instance
             */
            PeaceResponse.create = function create(properties) {
                return new PeaceResponse(properties);
            };

            /**
             * Encodes the specified PeaceResponse message. Does not implicitly {@link Game.Fivestone.PeaceResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.PeaceResponse
             * @static
             * @param {Game.Fivestone.IPeaceResponse} message PeaceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PeaceResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified PeaceResponse message, length delimited. Does not implicitly {@link Game.Fivestone.PeaceResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.PeaceResponse
             * @static
             * @param {Game.Fivestone.IPeaceResponse} message PeaceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PeaceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PeaceResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.PeaceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.PeaceResponse} PeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PeaceResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.PeaceResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PeaceResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.PeaceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.PeaceResponse} PeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PeaceResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PeaceResponse message.
             * @function verify
             * @memberof Game.Fivestone.PeaceResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PeaceResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            return PeaceResponse;
        })();

        Fivestone.PeaceNotify = (function() {

            /**
             * Properties of a PeaceNotify.
             * @memberof Game.Fivestone
             * @interface IPeaceNotify
             * @property {string|null} [uid] PeaceNotify uid
             */

            /**
             * Constructs a new PeaceNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents a PeaceNotify.
             * @implements IPeaceNotify
             * @constructor
             * @param {Game.Fivestone.IPeaceNotify=} [properties] Properties to set
             */
            function PeaceNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PeaceNotify uid.
             * @member {string} uid
             * @memberof Game.Fivestone.PeaceNotify
             * @instance
             */
            PeaceNotify.prototype.uid = "";

            /**
             * Creates a new PeaceNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.PeaceNotify
             * @static
             * @param {Game.Fivestone.IPeaceNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.PeaceNotify} PeaceNotify instance
             */
            PeaceNotify.create = function create(properties) {
                return new PeaceNotify(properties);
            };

            /**
             * Encodes the specified PeaceNotify message. Does not implicitly {@link Game.Fivestone.PeaceNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.PeaceNotify
             * @static
             * @param {Game.Fivestone.IPeaceNotify} message PeaceNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PeaceNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified PeaceNotify message, length delimited. Does not implicitly {@link Game.Fivestone.PeaceNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.PeaceNotify
             * @static
             * @param {Game.Fivestone.IPeaceNotify} message PeaceNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PeaceNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PeaceNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.PeaceNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.PeaceNotify} PeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PeaceNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.PeaceNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PeaceNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.PeaceNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.PeaceNotify} PeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PeaceNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PeaceNotify message.
             * @function verify
             * @memberof Game.Fivestone.PeaceNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PeaceNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            return PeaceNotify;
        })();

        Fivestone.AgreePeaceRequest = (function() {

            /**
             * Properties of an AgreePeaceRequest.
             * @memberof Game.Fivestone
             * @interface IAgreePeaceRequest
             */

            /**
             * Constructs a new AgreePeaceRequest.
             * @memberof Game.Fivestone
             * @classdesc Represents an AgreePeaceRequest.
             * @implements IAgreePeaceRequest
             * @constructor
             * @param {Game.Fivestone.IAgreePeaceRequest=} [properties] Properties to set
             */
            function AgreePeaceRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new AgreePeaceRequest instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.AgreePeaceRequest
             * @static
             * @param {Game.Fivestone.IAgreePeaceRequest=} [properties] Properties to set
             * @returns {Game.Fivestone.AgreePeaceRequest} AgreePeaceRequest instance
             */
            AgreePeaceRequest.create = function create(properties) {
                return new AgreePeaceRequest(properties);
            };

            /**
             * Encodes the specified AgreePeaceRequest message. Does not implicitly {@link Game.Fivestone.AgreePeaceRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.AgreePeaceRequest
             * @static
             * @param {Game.Fivestone.IAgreePeaceRequest} message AgreePeaceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreePeaceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified AgreePeaceRequest message, length delimited. Does not implicitly {@link Game.Fivestone.AgreePeaceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.AgreePeaceRequest
             * @static
             * @param {Game.Fivestone.IAgreePeaceRequest} message AgreePeaceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreePeaceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreePeaceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.AgreePeaceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.AgreePeaceRequest} AgreePeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreePeaceRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.AgreePeaceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AgreePeaceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.AgreePeaceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.AgreePeaceRequest} AgreePeaceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreePeaceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreePeaceRequest message.
             * @function verify
             * @memberof Game.Fivestone.AgreePeaceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreePeaceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return AgreePeaceRequest;
        })();

        Fivestone.AgreePeaceResponse = (function() {

            /**
             * Properties of an AgreePeaceResponse.
             * @memberof Game.Fivestone
             * @interface IAgreePeaceResponse
             * @property {number|null} [status] AgreePeaceResponse status
             * @property {string|null} [msg] AgreePeaceResponse msg
             */

            /**
             * Constructs a new AgreePeaceResponse.
             * @memberof Game.Fivestone
             * @classdesc Represents an AgreePeaceResponse.
             * @implements IAgreePeaceResponse
             * @constructor
             * @param {Game.Fivestone.IAgreePeaceResponse=} [properties] Properties to set
             */
            function AgreePeaceResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreePeaceResponse status.
             * @member {number} status
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @instance
             */
            AgreePeaceResponse.prototype.status = 0;

            /**
             * AgreePeaceResponse msg.
             * @member {string} msg
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @instance
             */
            AgreePeaceResponse.prototype.msg = "";

            /**
             * Creates a new AgreePeaceResponse instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @static
             * @param {Game.Fivestone.IAgreePeaceResponse=} [properties] Properties to set
             * @returns {Game.Fivestone.AgreePeaceResponse} AgreePeaceResponse instance
             */
            AgreePeaceResponse.create = function create(properties) {
                return new AgreePeaceResponse(properties);
            };

            /**
             * Encodes the specified AgreePeaceResponse message. Does not implicitly {@link Game.Fivestone.AgreePeaceResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @static
             * @param {Game.Fivestone.IAgreePeaceResponse} message AgreePeaceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreePeaceResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified AgreePeaceResponse message, length delimited. Does not implicitly {@link Game.Fivestone.AgreePeaceResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @static
             * @param {Game.Fivestone.IAgreePeaceResponse} message AgreePeaceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreePeaceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreePeaceResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.AgreePeaceResponse} AgreePeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreePeaceResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.AgreePeaceResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AgreePeaceResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.AgreePeaceResponse} AgreePeaceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreePeaceResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreePeaceResponse message.
             * @function verify
             * @memberof Game.Fivestone.AgreePeaceResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreePeaceResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            return AgreePeaceResponse;
        })();

        Fivestone.AgreePeaceNotify = (function() {

            /**
             * Properties of an AgreePeaceNotify.
             * @memberof Game.Fivestone
             * @interface IAgreePeaceNotify
             * @property {string|null} [uid] AgreePeaceNotify uid
             */

            /**
             * Constructs a new AgreePeaceNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents an AgreePeaceNotify.
             * @implements IAgreePeaceNotify
             * @constructor
             * @param {Game.Fivestone.IAgreePeaceNotify=} [properties] Properties to set
             */
            function AgreePeaceNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreePeaceNotify uid.
             * @member {string} uid
             * @memberof Game.Fivestone.AgreePeaceNotify
             * @instance
             */
            AgreePeaceNotify.prototype.uid = "";

            /**
             * Creates a new AgreePeaceNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.AgreePeaceNotify
             * @static
             * @param {Game.Fivestone.IAgreePeaceNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.AgreePeaceNotify} AgreePeaceNotify instance
             */
            AgreePeaceNotify.create = function create(properties) {
                return new AgreePeaceNotify(properties);
            };

            /**
             * Encodes the specified AgreePeaceNotify message. Does not implicitly {@link Game.Fivestone.AgreePeaceNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.AgreePeaceNotify
             * @static
             * @param {Game.Fivestone.IAgreePeaceNotify} message AgreePeaceNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreePeaceNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                return writer;
            };

            /**
             * Encodes the specified AgreePeaceNotify message, length delimited. Does not implicitly {@link Game.Fivestone.AgreePeaceNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.AgreePeaceNotify
             * @static
             * @param {Game.Fivestone.IAgreePeaceNotify} message AgreePeaceNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreePeaceNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreePeaceNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.AgreePeaceNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.AgreePeaceNotify} AgreePeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreePeaceNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.AgreePeaceNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AgreePeaceNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.AgreePeaceNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.AgreePeaceNotify} AgreePeaceNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreePeaceNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreePeaceNotify message.
             * @function verify
             * @memberof Game.Fivestone.AgreePeaceNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreePeaceNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                return null;
            };

            return AgreePeaceNotify;
        })();

        Fivestone.LinksNotify = (function() {

            /**
             * Properties of a LinksNotify.
             * @memberof Game.Fivestone
             * @interface ILinksNotify
             * @property {number|null} [start_x] LinksNotify start_x
             * @property {number|null} [start_y] LinksNotify start_y
             * @property {number|null} [end_x] LinksNotify end_x
             * @property {number|null} [end_y] LinksNotify end_y
             */

            /**
             * Constructs a new LinksNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents a LinksNotify.
             * @implements ILinksNotify
             * @constructor
             * @param {Game.Fivestone.ILinksNotify=} [properties] Properties to set
             */
            function LinksNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LinksNotify start_x.
             * @member {number} start_x
             * @memberof Game.Fivestone.LinksNotify
             * @instance
             */
            LinksNotify.prototype.start_x = 0;

            /**
             * LinksNotify start_y.
             * @member {number} start_y
             * @memberof Game.Fivestone.LinksNotify
             * @instance
             */
            LinksNotify.prototype.start_y = 0;

            /**
             * LinksNotify end_x.
             * @member {number} end_x
             * @memberof Game.Fivestone.LinksNotify
             * @instance
             */
            LinksNotify.prototype.end_x = 0;

            /**
             * LinksNotify end_y.
             * @member {number} end_y
             * @memberof Game.Fivestone.LinksNotify
             * @instance
             */
            LinksNotify.prototype.end_y = 0;

            /**
             * Creates a new LinksNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.LinksNotify
             * @static
             * @param {Game.Fivestone.ILinksNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.LinksNotify} LinksNotify instance
             */
            LinksNotify.create = function create(properties) {
                return new LinksNotify(properties);
            };

            /**
             * Encodes the specified LinksNotify message. Does not implicitly {@link Game.Fivestone.LinksNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.LinksNotify
             * @static
             * @param {Game.Fivestone.ILinksNotify} message LinksNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LinksNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.start_x != null && Object.hasOwnProperty.call(message, "start_x"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start_x);
                if (message.start_y != null && Object.hasOwnProperty.call(message, "start_y"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.start_y);
                if (message.end_x != null && Object.hasOwnProperty.call(message, "end_x"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.end_x);
                if (message.end_y != null && Object.hasOwnProperty.call(message, "end_y"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end_y);
                return writer;
            };

            /**
             * Encodes the specified LinksNotify message, length delimited. Does not implicitly {@link Game.Fivestone.LinksNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.LinksNotify
             * @static
             * @param {Game.Fivestone.ILinksNotify} message LinksNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LinksNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LinksNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.LinksNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.LinksNotify} LinksNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LinksNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.LinksNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.start_x = reader.int32();
                        break;
                    case 2:
                        message.start_y = reader.int32();
                        break;
                    case 3:
                        message.end_x = reader.int32();
                        break;
                    case 4:
                        message.end_y = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LinksNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.LinksNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.LinksNotify} LinksNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LinksNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LinksNotify message.
             * @function verify
             * @memberof Game.Fivestone.LinksNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LinksNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.start_x != null && message.hasOwnProperty("start_x"))
                    if (!$util.isInteger(message.start_x))
                        return "start_x: integer expected";
                if (message.start_y != null && message.hasOwnProperty("start_y"))
                    if (!$util.isInteger(message.start_y))
                        return "start_y: integer expected";
                if (message.end_x != null && message.hasOwnProperty("end_x"))
                    if (!$util.isInteger(message.end_x))
                        return "end_x: integer expected";
                if (message.end_y != null && message.hasOwnProperty("end_y"))
                    if (!$util.isInteger(message.end_y))
                        return "end_y: integer expected";
                return null;
            };

            return LinksNotify;
        })();

        Fivestone.CancelRequest = (function() {

            /**
             * Properties of a CancelRequest.
             * @memberof Game.Fivestone
             * @interface ICancelRequest
             */

            /**
             * Constructs a new CancelRequest.
             * @memberof Game.Fivestone
             * @classdesc Represents a CancelRequest.
             * @implements ICancelRequest
             * @constructor
             * @param {Game.Fivestone.ICancelRequest=} [properties] Properties to set
             */
            function CancelRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CancelRequest instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.CancelRequest
             * @static
             * @param {Game.Fivestone.ICancelRequest=} [properties] Properties to set
             * @returns {Game.Fivestone.CancelRequest} CancelRequest instance
             */
            CancelRequest.create = function create(properties) {
                return new CancelRequest(properties);
            };

            /**
             * Encodes the specified CancelRequest message. Does not implicitly {@link Game.Fivestone.CancelRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.CancelRequest
             * @static
             * @param {Game.Fivestone.ICancelRequest} message CancelRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CancelRequest message, length delimited. Does not implicitly {@link Game.Fivestone.CancelRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.CancelRequest
             * @static
             * @param {Game.Fivestone.ICancelRequest} message CancelRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CancelRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.CancelRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.CancelRequest} CancelRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.CancelRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CancelRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.CancelRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.CancelRequest} CancelRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CancelRequest message.
             * @function verify
             * @memberof Game.Fivestone.CancelRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CancelRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return CancelRequest;
        })();

        Fivestone.CancelResponse = (function() {

            /**
             * Properties of a CancelResponse.
             * @memberof Game.Fivestone
             * @interface ICancelResponse
             * @property {number|null} [status] CancelResponse status
             * @property {string|null} [msg] CancelResponse msg
             */

            /**
             * Constructs a new CancelResponse.
             * @memberof Game.Fivestone
             * @classdesc Represents a CancelResponse.
             * @implements ICancelResponse
             * @constructor
             * @param {Game.Fivestone.ICancelResponse=} [properties] Properties to set
             */
            function CancelResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CancelResponse status.
             * @member {number} status
             * @memberof Game.Fivestone.CancelResponse
             * @instance
             */
            CancelResponse.prototype.status = 0;

            /**
             * CancelResponse msg.
             * @member {string} msg
             * @memberof Game.Fivestone.CancelResponse
             * @instance
             */
            CancelResponse.prototype.msg = "";

            /**
             * Creates a new CancelResponse instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.CancelResponse
             * @static
             * @param {Game.Fivestone.ICancelResponse=} [properties] Properties to set
             * @returns {Game.Fivestone.CancelResponse} CancelResponse instance
             */
            CancelResponse.create = function create(properties) {
                return new CancelResponse(properties);
            };

            /**
             * Encodes the specified CancelResponse message. Does not implicitly {@link Game.Fivestone.CancelResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.CancelResponse
             * @static
             * @param {Game.Fivestone.ICancelResponse} message CancelResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified CancelResponse message, length delimited. Does not implicitly {@link Game.Fivestone.CancelResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.CancelResponse
             * @static
             * @param {Game.Fivestone.ICancelResponse} message CancelResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CancelResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.CancelResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.CancelResponse} CancelResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.CancelResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CancelResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.CancelResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.CancelResponse} CancelResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CancelResponse message.
             * @function verify
             * @memberof Game.Fivestone.CancelResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CancelResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            return CancelResponse;
        })();

        Fivestone.CancelNotify = (function() {

            /**
             * Properties of a CancelNotify.
             * @memberof Game.Fivestone
             * @interface ICancelNotify
             */

            /**
             * Constructs a new CancelNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents a CancelNotify.
             * @implements ICancelNotify
             * @constructor
             * @param {Game.Fivestone.ICancelNotify=} [properties] Properties to set
             */
            function CancelNotify(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CancelNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.CancelNotify
             * @static
             * @param {Game.Fivestone.ICancelNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.CancelNotify} CancelNotify instance
             */
            CancelNotify.create = function create(properties) {
                return new CancelNotify(properties);
            };

            /**
             * Encodes the specified CancelNotify message. Does not implicitly {@link Game.Fivestone.CancelNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.CancelNotify
             * @static
             * @param {Game.Fivestone.ICancelNotify} message CancelNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CancelNotify message, length delimited. Does not implicitly {@link Game.Fivestone.CancelNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.CancelNotify
             * @static
             * @param {Game.Fivestone.ICancelNotify} message CancelNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CancelNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CancelNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.CancelNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.CancelNotify} CancelNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.CancelNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CancelNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.CancelNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.CancelNotify} CancelNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CancelNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CancelNotify message.
             * @function verify
             * @memberof Game.Fivestone.CancelNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CancelNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return CancelNotify;
        })();

        Fivestone.AgreeCancelRequest = (function() {

            /**
             * Properties of an AgreeCancelRequest.
             * @memberof Game.Fivestone
             * @interface IAgreeCancelRequest
             * @property {number|null} [agree] AgreeCancelRequest agree
             */

            /**
             * Constructs a new AgreeCancelRequest.
             * @memberof Game.Fivestone
             * @classdesc Represents an AgreeCancelRequest.
             * @implements IAgreeCancelRequest
             * @constructor
             * @param {Game.Fivestone.IAgreeCancelRequest=} [properties] Properties to set
             */
            function AgreeCancelRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreeCancelRequest agree.
             * @member {number} agree
             * @memberof Game.Fivestone.AgreeCancelRequest
             * @instance
             */
            AgreeCancelRequest.prototype.agree = 0;

            /**
             * Creates a new AgreeCancelRequest instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.AgreeCancelRequest
             * @static
             * @param {Game.Fivestone.IAgreeCancelRequest=} [properties] Properties to set
             * @returns {Game.Fivestone.AgreeCancelRequest} AgreeCancelRequest instance
             */
            AgreeCancelRequest.create = function create(properties) {
                return new AgreeCancelRequest(properties);
            };

            /**
             * Encodes the specified AgreeCancelRequest message. Does not implicitly {@link Game.Fivestone.AgreeCancelRequest.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.AgreeCancelRequest
             * @static
             * @param {Game.Fivestone.IAgreeCancelRequest} message AgreeCancelRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeCancelRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.agree != null && Object.hasOwnProperty.call(message, "agree"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.agree);
                return writer;
            };

            /**
             * Encodes the specified AgreeCancelRequest message, length delimited. Does not implicitly {@link Game.Fivestone.AgreeCancelRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.AgreeCancelRequest
             * @static
             * @param {Game.Fivestone.IAgreeCancelRequest} message AgreeCancelRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeCancelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreeCancelRequest message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.AgreeCancelRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.AgreeCancelRequest} AgreeCancelRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeCancelRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.AgreeCancelRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.agree = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AgreeCancelRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.AgreeCancelRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.AgreeCancelRequest} AgreeCancelRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeCancelRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreeCancelRequest message.
             * @function verify
             * @memberof Game.Fivestone.AgreeCancelRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreeCancelRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.agree != null && message.hasOwnProperty("agree"))
                    if (!$util.isInteger(message.agree))
                        return "agree: integer expected";
                return null;
            };

            return AgreeCancelRequest;
        })();

        Fivestone.AgreeCancelResponse = (function() {

            /**
             * Properties of an AgreeCancelResponse.
             * @memberof Game.Fivestone
             * @interface IAgreeCancelResponse
             * @property {number|null} [status] AgreeCancelResponse status
             * @property {string|null} [msg] AgreeCancelResponse msg
             */

            /**
             * Constructs a new AgreeCancelResponse.
             * @memberof Game.Fivestone
             * @classdesc Represents an AgreeCancelResponse.
             * @implements IAgreeCancelResponse
             * @constructor
             * @param {Game.Fivestone.IAgreeCancelResponse=} [properties] Properties to set
             */
            function AgreeCancelResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreeCancelResponse status.
             * @member {number} status
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @instance
             */
            AgreeCancelResponse.prototype.status = 0;

            /**
             * AgreeCancelResponse msg.
             * @member {string} msg
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @instance
             */
            AgreeCancelResponse.prototype.msg = "";

            /**
             * Creates a new AgreeCancelResponse instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @static
             * @param {Game.Fivestone.IAgreeCancelResponse=} [properties] Properties to set
             * @returns {Game.Fivestone.AgreeCancelResponse} AgreeCancelResponse instance
             */
            AgreeCancelResponse.create = function create(properties) {
                return new AgreeCancelResponse(properties);
            };

            /**
             * Encodes the specified AgreeCancelResponse message. Does not implicitly {@link Game.Fivestone.AgreeCancelResponse.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @static
             * @param {Game.Fivestone.IAgreeCancelResponse} message AgreeCancelResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeCancelResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified AgreeCancelResponse message, length delimited. Does not implicitly {@link Game.Fivestone.AgreeCancelResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @static
             * @param {Game.Fivestone.IAgreeCancelResponse} message AgreeCancelResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeCancelResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreeCancelResponse message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.AgreeCancelResponse} AgreeCancelResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeCancelResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.AgreeCancelResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.status = reader.int32();
                        break;
                    case 2:
                        message.msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AgreeCancelResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.AgreeCancelResponse} AgreeCancelResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeCancelResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreeCancelResponse message.
             * @function verify
             * @memberof Game.Fivestone.AgreeCancelResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreeCancelResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            return AgreeCancelResponse;
        })();

        Fivestone.AgreeCancelNotify = (function() {

            /**
             * Properties of an AgreeCancelNotify.
             * @memberof Game.Fivestone
             * @interface IAgreeCancelNotify
             * @property {string|null} [uid] AgreeCancelNotify uid
             * @property {number|null} [agree] AgreeCancelNotify agree
             * @property {Array.<number>|null} [cards] AgreeCancelNotify cards
             */

            /**
             * Constructs a new AgreeCancelNotify.
             * @memberof Game.Fivestone
             * @classdesc Represents an AgreeCancelNotify.
             * @implements IAgreeCancelNotify
             * @constructor
             * @param {Game.Fivestone.IAgreeCancelNotify=} [properties] Properties to set
             */
            function AgreeCancelNotify(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AgreeCancelNotify uid.
             * @member {string} uid
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @instance
             */
            AgreeCancelNotify.prototype.uid = "";

            /**
             * AgreeCancelNotify agree.
             * @member {number} agree
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @instance
             */
            AgreeCancelNotify.prototype.agree = 0;

            /**
             * AgreeCancelNotify cards.
             * @member {Array.<number>} cards
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @instance
             */
            AgreeCancelNotify.prototype.cards = $util.emptyArray;

            /**
             * Creates a new AgreeCancelNotify instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @static
             * @param {Game.Fivestone.IAgreeCancelNotify=} [properties] Properties to set
             * @returns {Game.Fivestone.AgreeCancelNotify} AgreeCancelNotify instance
             */
            AgreeCancelNotify.create = function create(properties) {
                return new AgreeCancelNotify(properties);
            };

            /**
             * Encodes the specified AgreeCancelNotify message. Does not implicitly {@link Game.Fivestone.AgreeCancelNotify.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @static
             * @param {Game.Fivestone.IAgreeCancelNotify} message AgreeCancelNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeCancelNotify.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                if (message.agree != null && Object.hasOwnProperty.call(message, "agree"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.agree);
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cards[i]);
                return writer;
            };

            /**
             * Encodes the specified AgreeCancelNotify message, length delimited. Does not implicitly {@link Game.Fivestone.AgreeCancelNotify.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @static
             * @param {Game.Fivestone.IAgreeCancelNotify} message AgreeCancelNotify message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AgreeCancelNotify.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AgreeCancelNotify message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.AgreeCancelNotify} AgreeCancelNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeCancelNotify.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.AgreeCancelNotify();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    case 2:
                        message.agree = reader.int32();
                        break;
                    case 3:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AgreeCancelNotify message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.AgreeCancelNotify} AgreeCancelNotify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AgreeCancelNotify.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AgreeCancelNotify message.
             * @function verify
             * @memberof Game.Fivestone.AgreeCancelNotify
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AgreeCancelNotify.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.agree != null && message.hasOwnProperty("agree"))
                    if (!$util.isInteger(message.agree))
                        return "agree: integer expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i)
                        if (!$util.isInteger(message.cards[i]))
                            return "cards: integer[] expected";
                }
                return null;
            };

            return AgreeCancelNotify;
        })();

        Fivestone.Chess = (function() {

            /**
             * Properties of a Chess.
             * @memberof Game.Fivestone
             * @interface IChess
             * @property {number|null} [value] Chess value
             * @property {number|null} [x] Chess x
             * @property {number|null} [y] Chess y
             */

            /**
             * Constructs a new Chess.
             * @memberof Game.Fivestone
             * @classdesc Represents a Chess.
             * @implements IChess
             * @constructor
             * @param {Game.Fivestone.IChess=} [properties] Properties to set
             */
            function Chess(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Chess value.
             * @member {number} value
             * @memberof Game.Fivestone.Chess
             * @instance
             */
            Chess.prototype.value = 0;

            /**
             * Chess x.
             * @member {number} x
             * @memberof Game.Fivestone.Chess
             * @instance
             */
            Chess.prototype.x = 0;

            /**
             * Chess y.
             * @member {number} y
             * @memberof Game.Fivestone.Chess
             * @instance
             */
            Chess.prototype.y = 0;

            /**
             * Creates a new Chess instance using the specified properties.
             * @function create
             * @memberof Game.Fivestone.Chess
             * @static
             * @param {Game.Fivestone.IChess=} [properties] Properties to set
             * @returns {Game.Fivestone.Chess} Chess instance
             */
            Chess.create = function create(properties) {
                return new Chess(properties);
            };

            /**
             * Encodes the specified Chess message. Does not implicitly {@link Game.Fivestone.Chess.verify|verify} messages.
             * @function encode
             * @memberof Game.Fivestone.Chess
             * @static
             * @param {Game.Fivestone.IChess} message Chess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chess.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.x);
                if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.y);
                return writer;
            };

            /**
             * Encodes the specified Chess message, length delimited. Does not implicitly {@link Game.Fivestone.Chess.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.Fivestone.Chess
             * @static
             * @param {Game.Fivestone.IChess} message Chess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chess.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Chess message from the specified reader or buffer.
             * @function decode
             * @memberof Game.Fivestone.Chess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.Fivestone.Chess} Chess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chess.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.Fivestone.Chess();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    case 2:
                        message.x = reader.int32();
                        break;
                    case 3:
                        message.y = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Chess message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.Fivestone.Chess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.Fivestone.Chess} Chess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chess.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Chess message.
             * @function verify
             * @memberof Game.Fivestone.Chess
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chess.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x))
                        return "x: integer expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y))
                        return "y: integer expected";
                return null;
            };

            return Chess;
        })();

        return Fivestone;
    })();

    Game.H5 = (function() {

        /**
         * Namespace H5.
         * @memberof Game
         * @namespace
         */
        var H5 = {};

        /**
         * ErrorCode enum.
         * @name Game.H5.ErrorCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Failed=1 Failed value
         */
        H5.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Failed"] = 1;
            return values;
        })();

        H5.Message = (function() {

            /**
             * Properties of a Message.
             * @memberof Game.H5
             * @interface IMessage
             * @property {number|null} [msgId] Message msgId
             * @property {Uint8Array|null} [data] Message data
             * @property {Game.H5.IErrorInfo|null} [error_info] Message error_info
             * @property {number|Long|null} [timestamp] Message timestamp
             * @property {string|null} [field] Message field
             */

            /**
             * Constructs a new Message.
             * @memberof Game.H5
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {Game.H5.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Message msgId.
             * @member {number} msgId
             * @memberof Game.H5.Message
             * @instance
             */
            Message.prototype.msgId = 0;

            /**
             * Message data.
             * @member {Uint8Array} data
             * @memberof Game.H5.Message
             * @instance
             */
            Message.prototype.data = $util.newBuffer([]);

            /**
             * Message error_info.
             * @member {Game.H5.IErrorInfo|null|undefined} error_info
             * @memberof Game.H5.Message
             * @instance
             */
            Message.prototype.error_info = null;

            /**
             * Message timestamp.
             * @member {number|Long} timestamp
             * @memberof Game.H5.Message
             * @instance
             */
            Message.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Message field.
             * @member {string} field
             * @memberof Game.H5.Message
             * @instance
             */
            Message.prototype.field = "";

            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof Game.H5.Message
             * @static
             * @param {Game.H5.IMessage=} [properties] Properties to set
             * @returns {Game.H5.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };

            /**
             * Encodes the specified Message message. Does not implicitly {@link Game.H5.Message.verify|verify} messages.
             * @function encode
             * @memberof Game.H5.Message
             * @static
             * @param {Game.H5.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgId);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.error_info != null && Object.hasOwnProperty.call(message, "error_info"))
                    $root.Game.H5.ErrorInfo.encode(message.error_info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.timestamp);
                if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.field);
                return writer;
            };

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link Game.H5.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.H5.Message
             * @static
             * @param {Game.H5.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof Game.H5.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.H5.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.H5.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.msgId = reader.int32();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    case 3:
                        message.error_info = $root.Game.H5.ErrorInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.timestamp = reader.uint64();
                        break;
                    case 5:
                        message.field = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.H5.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.H5.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Message message.
             * @function verify
             * @memberof Game.H5.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.msgId != null && message.hasOwnProperty("msgId"))
                    if (!$util.isInteger(message.msgId))
                        return "msgId: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.error_info != null && message.hasOwnProperty("error_info")) {
                    var error = $root.Game.H5.ErrorInfo.verify(message.error_info);
                    if (error)
                        return "error_info." + error;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.field != null && message.hasOwnProperty("field"))
                    if (!$util.isString(message.field))
                        return "field: string expected";
                return null;
            };

            return Message;
        })();

        H5.ErrorInfo = (function() {

            /**
             * Properties of an ErrorInfo.
             * @memberof Game.H5
             * @interface IErrorInfo
             * @property {Game.H5.ErrorCode|null} [error_code] ErrorInfo error_code
             * @property {string|null} [error_msg] ErrorInfo error_msg
             */

            /**
             * Constructs a new ErrorInfo.
             * @memberof Game.H5
             * @classdesc Represents an ErrorInfo.
             * @implements IErrorInfo
             * @constructor
             * @param {Game.H5.IErrorInfo=} [properties] Properties to set
             */
            function ErrorInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ErrorInfo error_code.
             * @member {Game.H5.ErrorCode} error_code
             * @memberof Game.H5.ErrorInfo
             * @instance
             */
            ErrorInfo.prototype.error_code = 0;

            /**
             * ErrorInfo error_msg.
             * @member {string} error_msg
             * @memberof Game.H5.ErrorInfo
             * @instance
             */
            ErrorInfo.prototype.error_msg = "";

            /**
             * Creates a new ErrorInfo instance using the specified properties.
             * @function create
             * @memberof Game.H5.ErrorInfo
             * @static
             * @param {Game.H5.IErrorInfo=} [properties] Properties to set
             * @returns {Game.H5.ErrorInfo} ErrorInfo instance
             */
            ErrorInfo.create = function create(properties) {
                return new ErrorInfo(properties);
            };

            /**
             * Encodes the specified ErrorInfo message. Does not implicitly {@link Game.H5.ErrorInfo.verify|verify} messages.
             * @function encode
             * @memberof Game.H5.ErrorInfo
             * @static
             * @param {Game.H5.IErrorInfo} message ErrorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error_code != null && Object.hasOwnProperty.call(message, "error_code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error_code);
                if (message.error_msg != null && Object.hasOwnProperty.call(message, "error_msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.error_msg);
                return writer;
            };

            /**
             * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link Game.H5.ErrorInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Game.H5.ErrorInfo
             * @static
             * @param {Game.H5.IErrorInfo} message ErrorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Game.H5.ErrorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Game.H5.ErrorInfo} ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game.H5.ErrorInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error_code = reader.int32();
                        break;
                    case 2:
                        message.error_msg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Game.H5.ErrorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Game.H5.ErrorInfo} ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ErrorInfo message.
             * @function verify
             * @memberof Game.H5.ErrorInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ErrorInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error_code != null && message.hasOwnProperty("error_code"))
                    switch (message.error_code) {
                    default:
                        return "error_code: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.error_msg != null && message.hasOwnProperty("error_msg"))
                    if (!$util.isString(message.error_msg))
                        return "error_msg: string expected";
                return null;
            };

            return ErrorInfo;
        })();

        return H5;
    })();

    return Game;
})();