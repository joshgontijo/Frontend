/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.josue.jee.mavenproject1;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

/**
 * REST Web Service
 *
 * @author Josue
 */
@Path("generic")
@Singleton
public class GenericResource {

    @Context
    private UriInfo context;

    private static final Logger LOG = Logger.getLogger(GenericResource.class.getName());
    private Map<String, User> users = new HashMap<>();

    public GenericResource() {
        User u = new User();
        u.setAge(25);
        u.setFname("Joao");
        u.setLname("Silva");
        u.setUuid("123");
        users.put(u.getUuid(), u);

        u = new User();
        u.setAge(25);
        u.setFname("Maria");
        u.setLname("Carvalho");
        u.setUuid("456");
        users.put(u.getUuid(), u);
    }

    @GET
    @Produces("application/json")
    public Response findAllUsers() {
        LOG.log(Level.INFO, "PATH:{0}", context.getPath());
        LOG.info("METHOD: GET");
        LOG.info(users.toString());

        return Response.status(Response.Status.OK).entity(Arrays.asList(users.values())).build();
    }

    @GET
    @Path("/{uuid}")
    @Produces("application/json")
    public Response getUserById(@PathParam("uuid") String uuid) {
        LOG.log(Level.INFO, "PATH:{0}", context.getPath());
        LOG.info("METHOD: GET");

        User foundUser = users.get(uuid);
        if (foundUser != null) {
            return Response.status(Response.Status.OK).entity(foundUser).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @PUT
    @Consumes("application/json")
    @Produces("application/json")
    public Response createUser(User user) {
        LOG.log(Level.INFO, "PATH:{0}", context.getPath());
        LOG.info("METHOD: PUT");
        LOG.log(Level.INFO, "PAYLOAD:{0}", user);

        int uuid = new Random().nextInt(Integer.MAX_VALUE) + 1;
        user.setUuid(String.valueOf(uuid));
        this.users.put(user.getUuid(), user);
        return Response.status(Response.Status.CREATED).entity(user).build();

    }

    @POST
    @Consumes("application/json")
    @Produces("application/json")
    public Response updateUser(User user) {

        LOG.log(Level.INFO, "PATH:{0}", context.getPath());
        LOG.info("METHOD: POST");
        LOG.log(Level.INFO, "PAYLOAD:{0}", user);

        User foundUser = users.get(user.getUuid());
        if (foundUser != null) {
            //Do not update uuid
            foundUser.setAge(user.getAge());
            foundUser.setFname(user.getFname());
            foundUser.setLname(user.getLname());

            this.users.put(user.getUuid(), foundUser);
            return Response.status(Response.Status.CREATED).entity(foundUser).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();

    }

    @DELETE
    @Path("/{uuid}")
    @Produces("application/json")
    public Response deleteUser(@PathParam("uuid") String uuid) {

        LOG.log(Level.INFO, "PATH:{0}", context.getPath());
        LOG.info("METHOD: DELETE");

        User foundUser = users.get(uuid);
        if (foundUser != null) {
            users.remove(foundUser.getUuid());
            return Response.status(Response.Status.NO_CONTENT).entity(foundUser).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();

    }

}
