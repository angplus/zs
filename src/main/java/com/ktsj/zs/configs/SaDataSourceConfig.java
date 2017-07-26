package com.ktsj.zs.configs;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;

import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(
        entityManagerFactoryRef = "saEntityManagerFactory",
        basePackages = {"com.ktsj.zs.repositories.sa"})
public class SaDataSourceConfig {

    @Bean(name = "saDataSource")
    @ConfigurationProperties(prefix = "sa.datasource")
    public DataSource saDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name="saEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean saEntityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier("saDataSource") DataSource dataSource) {
        return builder
                .dataSource(dataSource)
                .packages("com.ktsj.zs.entities.sa")
                .build();
    }
}
