<<<<<<< HEAD
package com.ssafy.Config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ConfigurationProperties(prefix = "spring.redis")
@Component
public class RedisProperies {
    private String host;
    private int port;
}
=======
package com.ssafy.Config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ConfigurationProperties(prefix = "spring.redis")
@Component
public class RedisProperies {
    private String host;
    private int port;
}
>>>>>>> back
