import { User } from "../entities/user";
import fastify from "fastify";
import ErrorCode from "../util/ErrorCodes";

interface userController {
  get: fastify.RequestHandler;
  find: fastify.RequestHandler;
  add: fastify.RequestHandler;
  update: fastify.RequestHandler;
  delete: fastify.RequestHandler;
}

let userController: userController = {
  get: async (request, reply) => {
    try {
      const users: User[] = await User.find();

      reply.code(200).send(users);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  find: async (request, reply) => {
    try {
      const { id } = request.params;

      const user: User = await User.findOne({ id });

      if (!user)
        return reply.code(400).send({ error: ErrorCode.User.USER_NOT_FOUND });

      reply.code(200).send(user);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  add: async (request, reply) => {
    try {
      const { nickname } = request.body;

      const userVerify: User = await User.findOne({ nickname });

      if (userVerify)
        return reply
          .code(400)
          .send({ error: ErrorCode.User.USER_ALREADY_SIGNED });

      const response: User = await User.save(new User(request.body));

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  update: async (request, reply) => {
    try {
      const { id, ...user } = request.body;

      const response = await User.update({ id }, { ...user });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },

  delete: async (request, reply) => {
    try {
      const { id } = request.params;

      const response = await User.delete({ id });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send({ error: ErrorCode.Server.SERVER_ERROR });
    }
  },
};

export { userController };
