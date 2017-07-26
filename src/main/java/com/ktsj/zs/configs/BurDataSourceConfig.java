package com.ktsj.zs.configs;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(
        entityManagerFactoryRef = "burEntityManagerFactory",
        basePackages = {"com.ktsj.zs.repositories.bur"},
        transactionManagerRef = "burTransactionManager")
public class BurDataSourceConfig {
    @Bean(name = "burDataSource")
    @Primary
    @ConfigurationProperties(prefix = "bur.datasource")
    public DataSource burDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Primary
    @Bean(name="burEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean burEntityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier("burDataSource") DataSource dataSource) {
        return builder
                    .dataSource(dataSource)
                    .packages("com.ktsj.zs.entities.bur")
                    .build();
    }

    @Bean(name = "burTransactionManager")
    public PlatformTransactionManager burTransactionManager(
            @Qualifier("burEntityManagerFactory") EntityManagerFactory burEntityManagerFactory) {
        return new JpaTransactionManager(burEntityManagerFactory);
    }
}
