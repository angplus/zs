package com.ktsj.zs.controllers;

import com.ktsj.zs.entities.bur.Image;
import com.ktsj.zs.repositories.bur.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ImageController {

    private ResourceLoader resourceLoader = new DefaultResourceLoader();

    @Autowired
    private ImageRepository repository;

    @ResponseBody
    @RequestMapping(value = "/image/{image_id}", produces = MediaType.IMAGE_JPEG_VALUE)
    public Resource getImage(@PathVariable("image_id") String imageId) throws Exception {
        Image image = repository.findOne(imageId);

        if (image == null) {
            throw new ImageNotFoundException();
        }

        Resource resource = resourceLoader.getResource(("file:D:/article" + image.getImagePath()).replaceFirst("pictures", "pics"));
        if (!resource.exists()) {
            throw new ImageNotFoundException();
        }

        return resource;
    }

    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Image not found!")
    public static class ImageNotFoundException extends RuntimeException {

    }

}
